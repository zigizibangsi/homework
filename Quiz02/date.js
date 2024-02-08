function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  console.log(
    `오늘은 ${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second} 입니다.`
  );

  return;
}
getToday();
