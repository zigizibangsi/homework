import { tokenCheck } from "./services/token.js";
import { scrapping } from "./services/scrapping.js";
import { getWelcomeTemplate, sendTemplateToEmail } from "./services/email.js";
import { User } from "../models/userSchema.js";

export class UserController {
  // 회원 가입 API
  async signUp(req, res) {
    const { name, phone, personal, prefer, email, pwd } = req.body;
    console.log(phone);

    if (!tokenCheck(phone)) {
      const error = new Error("에러!! 핸드폰 번호가 인증되지 않았습니다");
      error.statusCode = 422;
      throw error;
    }

    const result = await scrapping(prefer);

    const user = new User({
      name,
      email,
      personal: personal.substring(0, 6) + "-******",
      prefer,
      pwd,
      phone,
      og: result,
    });

    await user.save();

    // const template = getWelcomeTemplate({ name, phone, prefer });
    // sendTemplateToEmail(email, template);

    res.send(user._id);
  }

  // 회원 목록 조회
  async usersSearch(_, res) {
    const result = await User.find();
    res.send(result);
  }
}
