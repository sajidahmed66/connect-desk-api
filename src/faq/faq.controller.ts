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
import { FaqService } from './faq.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';
import { CreateFaqDto, FaqResponseDto } from './dtos/faq.dto';

@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}
  @Get('')
  async getAll(): Promise<FaqResponseDto[]> {
    return this.faqService.findAllFaq();
  }

  @Get(':id')
  getFaqById(@Param('id', ParseIntPipe) id: number) {
    return this.faqService.findById(id);
  }

  @Roles(UserType.ADMIN)
  @Post('')
  createFaq(@Body() body: CreateFaqDto) {
    return this.faqService.createFaq(body);
  }

  @Roles(UserType.ADMIN)
  @Put(':id')
  updateFaq(@Body() body: CreateFaqDto, @Param('id', ParseIntPipe) id: number) {
    return this.faqService.updateFaq(id, body);
  }

  @Roles(UserType.ADMIN)
  @Delete(':id')
  deleteFaq(@Param('id', ParseIntPipe) id: number) {
    return this.faqService.deleteFaq(id);
  }
}
