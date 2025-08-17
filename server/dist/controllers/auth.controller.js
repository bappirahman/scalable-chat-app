import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
class AuthController {
    static async login(req, res) {
        try {
            const body = req.body;
            let findUser = await prisma.user.findUnique({
                where: {
                    email: body.email,
                },
            });
            if (!findUser) {
                findUser = await prisma.user.create({
                    data: body,
                });
            }
            let jwtPayload = {
                name: body.name,
                email: body.email,
                id: findUser.id,
            };
            if (!process.env.JWT_SECRET) {
                throw new Error("JWT_SECRET is not defined in environment variables");
            }
            const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
                expiresIn: "365d",
            });
            return res.json({
                message: "Logged in successfully",
                user: {
                    ...findUser,
                    token: `Bearer ${token}`,
                },
            });
        }
        catch (error) {
            return res.status(500);
        }
    }
}
export default AuthController;
