import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/index.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.listen(process.env.PORT || 5500, () => {
    console.log(`Server is started`);
});
