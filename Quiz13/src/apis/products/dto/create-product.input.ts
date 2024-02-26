import { Field, InputType, Int } from "@nestjs/graphql";
import { Min } from "class-validator";

@InputType()
export class CreateProductInput {
  @Field(() => String)
  menu: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Min(0)
  @Field(() => Int)
  kcal: number;

  @Min(0)
  @Field(() => Int)
  saturated_fat: number;

  @Min(0)
  @Field(() => Int)
  protein: number;

  @Min(0)
  @Field(() => Int)
  salt: number;

  @Min(0)
  @Field(() => Int)
  sugar: number;

  @Field(() => Int)
  caffeine: number;
}
