import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderRepository } from './repository/order.repository';
import { AddCartItemToOrderHandler } from './commands/handlers/AddCartItemToOrder.handler';
import { OrderController } from './order.controller';
import { GetOrderHandler } from './queries/handlers/get-order.handler';
import {
  CartItem,
  CartItemSchema,
} from 'src/cartItems/schemas/cart-item.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: CartItem.name, schema: CartItemSchema },
    ]),
    CqrsModule,
  ],
  controllers: [OrderController],
  providers: [OrderRepository, AddCartItemToOrderHandler, GetOrderHandler],
})
export class OrderModule {}
