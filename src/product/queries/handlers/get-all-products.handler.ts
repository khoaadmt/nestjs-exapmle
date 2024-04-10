import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { ProductRepository } from 'src/product/repository/product.repository';
import { GetAllProducts } from '../get-all-product.query';

@QueryHandler(GetAllProducts)
export class GetAllProductHandler implements ICommandHandler<GetAllProducts> {
  constructor(public readonly productRepository: ProductRepository) {}

  async execute(getAllProducts: GetAllProducts) {
    return await this.productRepository.getAllProducts(getAllProducts);
  }
}
