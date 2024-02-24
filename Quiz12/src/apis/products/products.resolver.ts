import { Query, Resolver } from "@nestjs/graphql";
import { ProductsService } from "./products.service";

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => String)
  fetchStarbucks(): string {
    return this.productService.menuList();
  }
}
