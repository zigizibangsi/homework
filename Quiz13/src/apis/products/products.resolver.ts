import { Query, Resolver, Mutation, Args } from "@nestjs/graphql";
import { ProductsService } from "./products.service";
import { Product } from "./entities/product.entity";
import { CreateProductInput } from "./dto/create-product.input";

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [Product], { nullable: true })
  fetchStarbucks(): Product[] {
    return this.productsService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args("createProductInput") createProductInput: CreateProductInput
  ): string {
    return this.productsService.create({ createProductInput });
  }
}
