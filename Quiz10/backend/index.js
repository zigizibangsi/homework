import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { UserController } from "./controllers/user.controller.js";
import { TokenController } from "./controllers/token.controller.js";

const app = express();
app.use(express.json());
app.use(cors());

const tokenController = new TokenController();
app.post("/tokens/phone", tokenController.createToken);
app.patch("/tokens/phone", tokenController.checkToken);

const userController = new UserController();
app.post("/users", userController.signUp); // 회원 가입
app.get("/users", userController.usersSearch); // 회원 목록 조회

mongoose.set("debug", true);

mongoose
  .connect("mongodb://my-database:27017/quiz10")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."));

app.listen(3000, () => {
  console.log("백엔드 API 서버가 켜졌어요!!!");
});
