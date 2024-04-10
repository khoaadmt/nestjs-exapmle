import { Module, ValidationPipe } from '@nestjs/common';
require('dotenv').config();
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CartItemModule } from './cartItems/cartItem.module';
import { CartModule } from './carts/cart.module';
import { OrderModule } from './orders/order.module';
import { exceptionLoggerFilter } from './untils/exceptionLogger.filter';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    ProductModule,
    CartItemModule,
    CartModule,
    OrderModule,
  ],
  providers: [{ provide: APP_FILTER, useClass: exceptionLoggerFilter }],
})
export class AppModule {}
