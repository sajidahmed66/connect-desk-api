import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  ProductResponseDto,
  UpdateProductDto,
} from './dto/product.dto';
import { UserType } from '@prisma/client';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('')
  getProducts(): Promise<ProductResponseDto[]> {
    return this.productService.getAlProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getProductById(id);
  }

  @Get('/image/:id')
  getImageofProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getImageOfProduct(id);
  }

  @Roles(UserType.ADMIN)
  @Post('')
  createProduct(@Body() body: CreateProductDto) {
    return this.productService.createProduct(body);
  }

  @Roles(UserType.ADMIN)
  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.deleteProduct(id);
  }
}
