import coolsms from "coolsms-node-sdk";
import "dotenv/config";

const mysms = coolsms.default;

export function checkPhone(myphone) {
  if (myphone.length < 10 || myphone.length > 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false; // early - exit
  } else {
    return true;
  }
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}
const SMS_KEY = process.env.SMS_KEY;
const SMS_SECRET = process.env.SMS_SECRET;
const SMS_SENDER = process.env.SMS_SENDER;

export function sendTokenToSMS(myphone, result) {
  const messageService = new mysms(SMS_KEY, SMS_SECRET);
  messageService.sendOne({
    to: myphone,
    from: SMS_SENDER,
    text: `[지기지방] 요청하신 인증번호는 ${result} 입니다.`,
  });
  // console.log(myphone + "번호로 인증번호 " + result + "를 전송합니다.");
}
