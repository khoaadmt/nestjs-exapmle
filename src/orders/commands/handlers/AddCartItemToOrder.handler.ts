import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AddCartItemToOrderCommand } from '../add-Cart_item-to-order.command';
import { OrderRepository } from 'src/orders/repository/order.repository';

@CommandHandler(AddCartItemToOrderCommand)
export class AddCartItemToOrderHandler
  implements ICommandHandler<AddCartItemToOrderCommand>
{
  constructor(private readonly OrderRository: OrderRepository) {}

  async execute(command: AddCartItemToOrderCommand) {
    return this.OrderRository.addCartItem(command);
  }
}
