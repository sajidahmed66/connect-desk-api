import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CategoryResponseDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCategories(): Promise<CategoryResponseDto[]> {
    try {
      const allCategory = await this.prismaService.category.findMany({
        include: {
          subcategory: {
            include: {
              products: true,
            },
          },
        },
      });

      return allCategory.map((cat) => new CategoryResponseDto(cat));
    } catch (error) {
      return [];
    }
  }

  async getCategoryById(id: number): Promise<CategoryResponseDto> {
    try {
      const selectedCategory = await this.prismaService.category.findUnique({
        where: {
          id,
        },
        include: {
          subcategory: {
            include: {
              products: true,
            },
          },
        },
      });
      return new CategoryResponseDto(selectedCategory);
    } catch (error) {
      new HttpException('category not found', 400);
    }
  }

  async createCategory(data: CreateCategoryDto): Promise<CategoryResponseDto> {
    try {
      const newCategory = await this.prismaService.category.create({
        data,
      });
      return new CategoryResponseDto(newCategory);
    } catch (error) {
      console.log(error);
      new HttpException('unable to create category', 400);
    }
  }

  async updateCategory(
    id: number,
    data: UpdateCategoryDto,
  ): Promise<CategoryResponseDto> {
    try {
      const updatedCategory = await this.prismaService.category.update({
        where: {
          id: id,
        },
        data: {
          ...data,
        },
      });
      return new CategoryResponseDto(updatedCategory);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async deleteCategory(id: number) {
    try {
      await this.prismaService.category.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new HttpException(`some thing went wrong ${error}`, 400);
    }
  }
}
