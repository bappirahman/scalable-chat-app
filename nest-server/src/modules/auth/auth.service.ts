import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE_INJECTION_TOKEN } from '../db/db.module';
import { type DrizzleDB } from '../db/type/drizzle';

@Injectable()
export class AuthService {
  constructor(@Inject(DRIZZLE_INJECTION_TOKEN) private db: DrizzleDB) {}
  
  async signIn(signInDto) {
    try {
      const findUser = await this.db.user.findUnique()
    }
  }
  //  try {
  //     let findUser = await prisma.user.findUnique({
  //       where: {
  //         email: body.email,
  //       },
  //     });
  //     if (!findUser) {
  //       findUser = await prisma.user.create({
  //         data: body,
  //       });
  //     }
  //     let jwtPayload = {
  //       name: body.name,
  //       email: body.email,
  //       id: findUser.id,
  //     };
  //     if (!process.env.JWT_SECRET) {
  //       throw new Error('JWT_SECRET is not defined in environment variables');
  //     }
  //     const token = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
  //       expiresIn: '365d',
  //     });
  //     return res.json({
  //       message: 'Logged in successfully',
  //       user: {
  //         ...findUser,
  //         token: `Bearer ${token}`,
  //       },
  //     });
  //   } catch (error) {
  //     return res.status(500);
  //   }
}
