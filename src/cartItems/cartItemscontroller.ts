import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddProductCommand } from './commands/add-product.command';

@Controller('cart-item')
export class CartItemController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('/')
  async createUser(@Body() data: any) {
    return this.commandBus.execute(
      new AddProductCommand(data.cart_id, data.product_id, data.quantity),
    );
  }
}
