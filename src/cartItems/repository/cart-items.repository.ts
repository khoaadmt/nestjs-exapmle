import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

import { CartItem } from '../schemas/cart-item.schemas';
import { Product } from 'src/product/schemas/product.schema';

@Injectable()
export class CartItemRepository {
  constructor(
    @InjectModel(CartItem.name)
    private cartItemModel: Model<CartItem>,

    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async addProduct(data: any) {
    const product = await this.productModel.findById(data.product_id);
    const cartItem = {
      cart_id: data.cart_id,
      product: product,
      quantity: data.quantity,
    };
    console.log(cartItem);
    return await this.cartItemModel.create(cartItem);
  }
}
