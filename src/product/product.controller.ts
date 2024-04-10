import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ProductDto } from './dto/product.dto';
import { CreateProductCommand } from './commands/create-product.command';
import { GetAllProducts } from './queries/get-all-product.query';
import { DeleteProductCommand } from './commands/delete-product.command';
import { PaginationProductDto } from './dto/PaginationProductDto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('/')
  async createUser(@Body() user: ProductDto) {
    return this.commandBus.execute(new CreateProductCommand(user));
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteProductCommand(id));
  }

  @Get('/')
  async getAllProducts(@Query() { page, limit, start }: PaginationProductDto) {
    console.log(page, limit, start);
    return this.queryBus.execute(new GetAllProducts(page, limit, start));
  }
}
