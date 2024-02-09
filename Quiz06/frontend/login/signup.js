// 휴대폰 인증 토큰 전송하기
let myphone;
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");
  myphone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;

  axios.post("http://localhost:3000/tokens/phone", {
    qqq: myphone,
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");
  const name = document.getElementById("SignupName").value;
  const personal = document.getElementById("SignupPersonal").value;
  const prefer = document.getElementById("SignupPrefer").value;
  const email = document.getElementById("SignupEmail").value;
  const password = document.getElementById("SignupPwd").value;

  axios.post("http://localhost:3000/users", {
    qqq: { name, myphone, personal, prefer, email, password },
  });
};
