import { Injectable, Scope } from "@nestjs/common";
import { Product } from "./entities/product.entity";
import { CreateProductInput } from "./dto/create-product.input";

interface IProductsServiceCreate {
  createProductInput: CreateProductInput;
}

@Injectable({ scope: Scope.DEFAULT })
export class ProductsService {
  findAll(): Product[] {
    // 1. DB에 접속 후, 데이터를 조회  =>  데이터를 조회했다고 가정
    const result = [
      {
        id: 1,
        menu: "아메리카노1",
        price: 2000,
        kcal: 1,
        saturated_fat: 0,
        protein: 0,
        salt: 1,
        sugar: 0,
        caffeine: 100,
      },
      {
        id: 2,
        menu: "아메리카노2",
        price: 2000,
        kcal: 1,
        saturated_fat: 0,
        protein: 0,
        salt: 1,
        sugar: 0,
        caffeine: 100,
      },
      {
        id: 3,
        menu: "아메리카노3",
        price: 2000,
        kcal: 1,
        saturated_fat: 0,
        protein: 0,
        salt: 1,
        sugar: 0,
        caffeine: 100,
      },
      {
        id: 4,
        menu: "아메리카노4",
        price: 2000,
        kcal: 1,
        saturated_fat: 0,
        protein: 0,
        salt: 1,
        sugar: 0,
        caffeine: 100,
      },
      {
        id: 5,
        menu: "아메리카노5",
        price: 2000,
        kcal: 1,
        saturated_fat: 0,
        protein: 0,
        salt: 1,
        sugar: 0,
        caffeine: 100,
      },
    ];

    // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
    return result;
  }

  create({ createProductInput }: IProductsServiceCreate): string {
    console.log(createProductInput);
    // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
    return "게시물 등록에 성공하였습니다.";
  }
}
