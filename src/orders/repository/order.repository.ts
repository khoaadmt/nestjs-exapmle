import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Order } from '../schemas/order.schema';
import { CartItem } from 'src/cartItems/schemas/cart-item.schemas';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(CartItem.name) private CartItemModel: Model<Order>,
  ) {}

  async addCartItem(data: any) {
    // this.CartItemModel.findByIdAndUpdate(data.cart_item_id, {
    //   cart_id: '',
    // }).then((CartItem) => {
    //   console.log(CartItem);
    // });

    const _this = this;

    return this.orderModel
      .create(data)
      .then((order) => {
        _this.CartItemModel.findByIdAndUpdate(data.cart_item_id, {
          cart_id: '',
        }).then(() => {});

        return order;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
  async getOrderById(id: string) {
    const order_id = new mongoose.Types.ObjectId(id);
    return await this.orderModel.aggregate([
      {
        $match: {
          _id: order_id,
        },
      },
      {
        $addFields: {
          cart_item_id_ObjectId: { $toObjectId: '$cart_item_id' },
        },
      },
      {
        $lookup: {
          from: 'cartitems',
          localField: 'cart_item_id_ObjectId',
          foreignField: '_id',
          as: 'cart_items',
        },
      },
      {
        $project: {
          cart_item_id_ObjectId: 0,
        },
      },
    ]);
  }
}
