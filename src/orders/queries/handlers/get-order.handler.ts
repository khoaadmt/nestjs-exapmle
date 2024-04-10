import { CommandHandler, ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrderQuery } from '../get-order.query';
import { OrderRepository } from 'src/orders/repository/order.repository';

@QueryHandler(GetOrderQuery)
export class GetOrderHandler implements ICommandHandler<GetOrderQuery> {
  constructor(private readonly orderRepository: OrderRepository) {}
  async execute(command: GetOrderQuery) {
    return this.orderRepository.getOrderById(command.id);
  }
}
