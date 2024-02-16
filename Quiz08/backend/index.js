import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js"; // export 가져오기
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get("/users", function (req, res) {
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "bbb@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "ccc@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "ddd@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "eee@gmail.com",
      name: "철수",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", function (req, res) {
  const result2 = [
    { name: "아메리카노1", kcal: 5 },
    { name: "아메리카노2", kcal: 5 },
    { name: "아메리카노3", kcal: 5 },
    { name: "아메리카노4", kcal: 5 },
    { name: "아메리카노5", kcal: 5 },
    { name: "아메리카노6", kcal: 5 },
    { name: "아메리카노7", kcal: 5 },
    { name: "아메리카노8", kcal: 5 },
    { name: "아메리카노9", kcal: 5 },
    { name: "아메리카노10", kcal: 5 },
  ];
  res.send(result2);
});

app.post("/tokens/phone", function (req, res) {
  const myphone = req.body.qqq;
  // 1. 휴대폰번호 자릿수 맞는지 확인하기(10~11자리)
  const isValid = checkPhone(myphone);
  if (isValid === false) return;

  // 2. 핸드폰 토큰 6자리 만들기
  const mytoken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기
  sendTokenToSMS(myphone, mytoken);

  res.send("인증완료!");
});

app.post("/users", function (req, res) {
  const { name, myphone, personal, prefer, email, password } = req.body.qqq;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@" 포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, myphone, prefer });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, myTemplate);

  res.send("가입완료!");
});

mongoose
  .connect("mongodb://quiz08-database:27017")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."));

app.listen(4000);
