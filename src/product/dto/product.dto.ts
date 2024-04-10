import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  product_name: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  price: number;

  @IsNotEmpty()
  @IsString()
  @Expose()
  image: string;
}
