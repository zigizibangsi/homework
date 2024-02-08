import { checkNumber1, checkNumber2, printlog } from "./utils.js";

function customRegistrationNumber(number) {
  // 1. 형식 확인
  const isValid = checkNumber1(number);
  if (isValid === false) return;

  // 2. 형식 확인(2)
  const isValid2 = checkNumber2(number);
  if (isValid2 === false) return;

  // 3. 콘솔 출력
  const result = printlog(number);
  console.log(result + "******");
}

customRegistrationNumber("210510-1010101");
