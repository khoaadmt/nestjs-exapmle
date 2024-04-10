import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';
import { Model, isValidObjectId } from 'mongoose';
import { ProductDto } from '../dto/product.dto';
import { PaginationProductDto } from '../dto/PaginationProductDto';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
  ) {}

  async createProduct(productDto: ProductDto) {
    return await this.ProductModel.create(productDto);
  }

  async getAllProducts({ page, limit, start }: PaginationProductDto) {
    const count = await this.ProductModel.countDocuments({});
    const pages = count / limit;
    const products = await this.ProductModel.find(
      {
        _id: {
          $gt: isValidObjectId(start) ? start : '000000000000000000000000',
        },
      },
      null,
      {
        sort: {
          _id: 1,
        },
        skip: (page - 1) * limit,
        limit: Number(limit),
      },
    );
    return { products, pages };
  }

  async updateProductById(id: string) {
    try {
      const product = await this.ProductModel.findOneAndUpdate(
        { _id: id },
        { $set: { product_name: 'product 9' } },
        {
          new: true,
        },
      );
      return product;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteProductById(id: string) {
    return this.ProductModel.findByIdAndDelete(id);
  }
}
