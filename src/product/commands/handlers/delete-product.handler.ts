import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProductRepository } from 'src/product/repository/product.repository';
import { DeleteProductCommand } from '../delete-product.command';

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler
  implements ICommandHandler<DeleteProductCommand>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: DeleteProductCommand) {
    return await this.productRepository.deleteProductById(command.id);
  }
}
