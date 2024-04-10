import { CommandHandler, ICommandBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../create-product.command';
import { ProductRepository } from 'src/product/repository/product.repository';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly productRository: ProductRepository) {}

  async execute(command: CreateProductCommand) {
    return this.productRository.createProduct(command.productDto);
  }
}
