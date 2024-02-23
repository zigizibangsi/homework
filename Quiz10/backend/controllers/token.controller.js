import { Token } from "../models/tokenSchema.js";
import { getToken, sendTokenToSMS } from "./services/phone.js";

export class TokenController {
  // 토큰 인증 API
  async createToken(req, res) {
    const phone = req.body.phone;
    const token = getToken();

    const isUsed = await Token.findOne({ phone: phone });
    if (isUsed) {
      await Token.findOneAndUpdate(
        { phone: phone },
        { token: token, isAuth: false }
      );
    } else {
      await Token.create({ token: token, phone: phone, isAuth: false });
    }

    // sendTokenToSMS(phone, token);

    res.send(`${phone}으로 인증 문자가 전송되었습니다.`);
  }

  // 인증 완료 API
  async checkToken(req, res) {
    const phone = req.body.phone;
    const token = req.body.token;

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
  }
}
