import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from '../schemas/cart.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CartRepository {
  constructor(@InjectModel(Cart.name) private cartModel: Model<Cart>) {}

  async getCartById(cartId: string) {
    const cartIdObj = new mongoose.Types.ObjectId(cartId);
    return await this.cartModel.aggregate([
      {
        $match: {
          _id: cartIdObj,
        },
      },
      {
        $addFields: {
          localFieldString: { $toString: '$_id' },
        },
      },
      {
        $lookup: {
          from: 'cartitems',
          localField: 'localFieldString',
          foreignField: 'cart_id',
          as: 'cartitems',
        },
      },
      {
        $project: {
          localFieldString: 0,
        },
      },
    ]);
  }
}
