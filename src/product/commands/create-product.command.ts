import { ProductDto } from '../dto/product.dto';

export class CreateProductCommand {
  constructor(public readonly productDto: ProductDto) {}
}
