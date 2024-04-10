import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateProductHandler } from './commands/handlers/create-product.handler';
import { ProductRepository } from './repository/product.repository';
import { GetAllProductHandler } from './queries/handlers/get-all-products.handler';
import { DeleteProductHandler } from './commands/handlers/delete-product.handler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    CqrsModule,
  ],
  controllers: [ProductController],
  providers: [
    ProductRepository,
    CreateProductHandler,
    GetAllProductHandler,
    DeleteProductHandler,
  ],
})
export class ProductModule {}
