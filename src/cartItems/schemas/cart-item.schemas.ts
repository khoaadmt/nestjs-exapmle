import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type CartItemDocument = HydratedDocument<CartItem>;
@Schema()
export class CartItem {
  @Prop({ required: true })
  cart_id: string;

  @Prop({ required: true })
  product: Product;

  @Prop({ required: true })
  quantity: number;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
