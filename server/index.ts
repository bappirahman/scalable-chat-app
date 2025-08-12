import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser());

app.use("/api", router);

app.listen(process.env.PORT || 5500, () => {
  console.log(`Server is started`);
});
