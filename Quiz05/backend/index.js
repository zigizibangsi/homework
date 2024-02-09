import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors";

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

app.listen(3000);
