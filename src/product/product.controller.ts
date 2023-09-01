import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('')
  getProducts() {}

  @Get(':id')
  getProductById() {}

  @Get('/image/:id')
  getImageofProductById(@Param('id') id: number) {}
  @Post('')
  createProduct(@Body() body) {}

  @Put()
  updateProduct(@Body() body: UpdateProductDto) {}

  @Delete(':id')
  deleteProduct() {}
}
