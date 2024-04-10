import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CartItemRepository } from 'src/cartItems/repository/cart-items.repository';
import { AddProductCommand } from '../add-product.command';

@CommandHandler(AddProductCommand)
export class AddProductHandler implements ICommandHandler<AddProductCommand> {
  constructor(private readonly cartItemRository: CartItemRepository) {}

  async execute(command: AddProductCommand) {
    const CartItem = {
      cart_id: command.cart_id,
      product_id: command.product_id,
      quantity: command.quantity,
    };
    return this.cartItemRository.addProduct(CartItem);
  }
}
