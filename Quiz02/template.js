function getWelcomeTemplate(email, number, phone, site) {
  const mytemplate = `
            <html>
                <body>
                    <h1>코드캠프님 가입을 환영합니다!!!</h1>
                    <hr>
                    <div>이메일: ${email}}</div>
                    <div>주민번호: ${number.substring(0, 8)}******</div>
                    <div>휴대폰번호: ${phone}</div>
                    <div>내가 좋아하는 사이트: ${site}</div>
                </body>
            </html>
        `;

  console.log(mytemplate);
}

getWelcomeTemplate("aaa@aaa.com", "123456-1234567", "01012341234", "apple.com");
