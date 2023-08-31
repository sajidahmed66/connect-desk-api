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
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto';

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
  @Roles(UserType.ADMIN)
  @Put('/:id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete('/:id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
