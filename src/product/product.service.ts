import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAlProducts() {
    try {
      const allProducts = await this.prismaService.product.findMany();
      return allProducts;
    } catch (error) {
      throw new HttpException('unable to get products', 400);
    }
  }
  async getProductById(id: number) {
    try {
      const selectedProduct = await this.prismaService.product.findUnique({
        where: {
          id,
        },
      });
      return selectedProduct;
    } catch (error) {
      throw new HttpException('unable to get product', 400);
    }
  }
  async getImageOfProduct(id: number) {
    try {
      const selectedProductimg = await this.prismaService.product.findUnique({
        where: {
          id,
        },
        select: {
          image: true,
          id: false,
          features: false,
          subcategory: false,
          subcategory_id: false,
          title: false,
        },
      });
      return selectedProductimg;
    } catch (error) {
      throw new HttpException('unable to get image', 400);
    }
  }
  // yet to do with multer and cloudinary
  async updateImageOfProduct(id: number, data: UpdateProductDto) {}

  async createProduct(data: CreateProductDto) {
    try {
      const createdProduct = await this.prismaService.product.create({
        data: {
          title: data.title,
          image: data.image,
          features: data.features,
          subcategory_id: data.subcategoryId,
        },
      });
      return createdProduct;
    } catch (error) {
      throw new HttpException('unable to create product', 400);
    }
  }

  async updateProduct(id: number, data: UpdateProductDto) {
    try {
      const updatedProduct = await this.prismaService.product.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });
      return updatedProduct;
    } catch (error) {
      throw new HttpException('unable to update product', 400);
    }
  }

  async deleteProduct(id: number) {
    try {
      await this.prismaService.product.delete({
        where: {
          id,
        },
      });
    } catch (error) {}
    throw new HttpException('unable to delete product', 400);
  }
}
