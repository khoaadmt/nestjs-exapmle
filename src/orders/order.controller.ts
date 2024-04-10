import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddCartItemToOrderCommand } from './commands/add-Cart_item-to-order.command';
import { GetOrderQuery } from './queries/get-order.query';

@Controller('order')
export class OrderController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('/')
  async addCartItem(@Body() data: any) {
    return await this.commandBus.execute(
      new AddCartItemToOrderCommand(
        data.user_id,
        data.payment,
        data.cart_item_id,
      ),
    );
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    try {
      const order = await this.queryBus.execute(new GetOrderQuery(id));
    } catch (error) {
      return {
        status: 400,
        message: error.message,
      };
    }
  }
}
