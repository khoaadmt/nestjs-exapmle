import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  cart_item_id: string[];

  @Prop({ required: true })
  cart_name: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
