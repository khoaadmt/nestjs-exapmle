import { ICommandHandler, QueryHandler } from '@nestjs/cqrs';
import { CartRepository } from 'src/carts/repository/cart.repository';
import { getCartQuery } from '../get-cart.query';

@QueryHandler(getCartQuery)
export class GetCartHandler implements ICommandHandler<getCartQuery> {
  constructor(public readonly cartRepository: CartRepository) {}

  async execute(query: getCartQuery) {
    return await this.cartRepository.getCartById(query.cart_id);
  }
}
