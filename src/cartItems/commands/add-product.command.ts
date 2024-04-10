import { ProductDto } from 'src/product/dto/product.dto';

export class AddProductCommand {
  constructor(
    public readonly cart_id: string,
    public readonly product_id: string,
    public readonly quantity: number,
  ) {}
}
