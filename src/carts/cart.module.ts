import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schemas/cart.schema';
import { CqrsModule } from '@nestjs/cqrs';
import { CartController } from './cart.controller';
import { CartRepository } from './repository/cart.repository';
import { getCartQuery } from './queries/get-cart.query';
import { GetCartHandler } from './queries/handlers/get-cart.handler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    CqrsModule,
  ],
  controllers: [CartController],
  providers: [CartRepository, getCartQuery, GetCartHandler],
})
export class CartModule {}
