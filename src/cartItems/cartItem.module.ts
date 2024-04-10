import { Module } from '@nestjs/common';
import { CartItem, CartItemSchema } from './schemas/cart-item.schemas';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemController } from './cartItemscontroller';
import { CartItemRepository } from './repository/cart-items.repository';
import { AddProductHandler } from './commands/handlers/add-product.handler';
import { ProductModule } from 'src/product/product.module';
import { Product, ProductSchema } from 'src/product/schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CartItem.name, schema: CartItemSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
    CqrsModule,
  ],
  controllers: [CartItemController],
  providers: [CartItemRepository, AddProductHandler],
})
export class CartItemModule {}
