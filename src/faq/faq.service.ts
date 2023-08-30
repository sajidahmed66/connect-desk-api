import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFaqDto, FaqResponseDto, updateFaqDto } from './dtos/faq.dto';

@Injectable()
export class FaqService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFaq(data: CreateFaqDto): Promise<FaqResponseDto> {
    const faq = await this.prismaService.faq.create({
      data,
    });

    return new FaqResponseDto(faq);
  }

  async findAllFaq(): Promise<FaqResponseDto[]> {
    const faqs = await this.prismaService.faq.findMany();
    if (!faqs.length) {
      throw new HttpException('no faqs found', 400);
    }
    return faqs.map((faq) => new FaqResponseDto(faq));
  }

  async findById(id: number): Promise<FaqResponseDto> {
    const faq = await this.prismaService.faq.findUnique({
      where: { id },
    });
    if (!faq) {
      throw new NotFoundException('faq not found');
    }
    return new FaqResponseDto(faq);
  }

  async updateFaq(id: number, data: updateFaqDto): Promise<FaqResponseDto> {
    const faq = await this.prismaService.faq.findUnique({
      where: { id },
    });
    if (!faq) {
      throw new NotFoundException('faq not found');
    }
    const faqUpdated = await this.prismaService.faq.update({
      where: { id },
      data: { ...data },
    });
    return new FaqResponseDto(faqUpdated);
  }

  async deleteFaq(id: number) {
    const faq = await this.prismaService.faq.findUnique({
      where: { id },
    });
    if (!faq) {
      throw new NotFoundException('faq not found');
    }
    try {
      await this.prismaService.faq.delete({
        where: { id },
      });
    } catch (error) {
      return new HttpException('not found', 400);
    }
  }
}
