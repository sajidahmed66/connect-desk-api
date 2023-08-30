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
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('')
  getCategory() {
    return this.categoryService.getAllCategories();
  }

  @Roles(UserType.ADMIN)
  @Post('')
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoryService.createCategory(body);
  }
}
