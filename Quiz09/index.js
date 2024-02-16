import express from "express";
import cors from "cors";
import { getToken, sendTokenToSMS } from "./phone.js";
import mongoose from "mongoose";
import "dotenv/config";
import { Token } from "./models/token.model.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/tokens/phone", async function (req, res) {
  const phone = req.body.phone;

  // 핸드폰 토큰 6자리 만들기
  const token = getToken();

  // 핸드폰 번호가 DB에 저장 되어 있는지 확인하기
  const isUsed = await Token.findOne({ phone: phone });
  if (isUsed) {
    await Token.findOneAndUpdate(
      { phone: phone },
      { token: token, isAuth: false }
    );
  } else {
    await Token.create({ token: token, phone: phone, isAuth: false });
  }
  // 핸드폰 번호에 토큰 전송하기
  sendTokenToSMS(phone, token);

  res.send(`${phone}으로 인증 문자가 전송되었습니다.`);
});

app.patch("/tokens/phone", async function (req, res) {
  const phone = req.body.phone;
  const token = req.body.token;

  // 핸드폰 번호 Check
  const isUsed = await Token.findOne({ phone: phone });

  if (!isUsed) {
    res.send(false);
    return;
  }

  if (isUsed.token === token) {
    await Token.findOneAndUpdate(
      { phone: phone },
      { token: token, isAuth: true }
    );
    res.send(true);
  } else {
    res.send(false);
  }
});

mongoose.set("debug", true);
mongoose
  .connect("mongodb://my-database:27017/data")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."));

app.listen(4000);
