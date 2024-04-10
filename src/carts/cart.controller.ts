import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { getCartQuery } from './queries/get-cart.query';

@Controller('cart')
export class CartController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':id')
  async createUser(@Param('id') id: string) {
    return this.queryBus.execute(new getCartQuery(id));
  }
}
