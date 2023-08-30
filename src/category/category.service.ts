import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryResponseDto, CreateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  getAllCategories() {
    try {
      return this.prismaService.category.findMany({
        include: {
          subcategory: true,
        },
      });
    } catch (error) {
      return [];
    }
  }

  getCategoryById(id: number) {
    return this.prismaService.category.findUnique({
      where: {
        id,
      },
    });
  }

  async createCategory(data: CreateCategoryDto) {
    try {
      const newCategory = await this.prismaService.category.create({
        data,
      });
      return new CategoryResponseDto(newCategory);
    } catch (error) {
      console.log(error);
      return new HttpException('unable to create category', 400);
    }
  }

  updateCategory() {}

  deleteCategory() {}
}
