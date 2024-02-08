export function checkNumber1(number) {
  if (number.includes("-") === false) {
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!");
    return false;
  } else {
    return true;
  }
}

export function checkNumber2(number) {
  const searchTerm = "-";
  const indexOfFirst = number.indexOf(searchTerm);
  if ((indexOfFirst != 6) | (number.length != 14)) {
    console.log("에러발생!!! 개수를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function printlog(number) {
  const result = number.substring(0, 8);
  return result;
}
