import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContactUsResponseDto } from './dtos/contact-us.dto';

interface CreateContactUsParams {
  name: string;
  email: string;
  subject: string;
  body: string;
}

@Injectable()
export class ContactUsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getContactUs(): Promise<ContactUsResponseDto[]> {
    const allContactUs = await this.prismaService.contactUs.findMany({
      select: {
        id: true,
        name: true,
        subject: true,
        body: true,
        created_at: true,
      },
    });

    if (!allContactUs) {
      throw new NotFoundException();
    }

    return allContactUs.map((data) => new ContactUsResponseDto(data));
  }

  async createContactUs({ name, email, subject, body }: CreateContactUsParams) {
    const newContactUsMessage = await this.prismaService.contactUs.create({
      data: {
        name,
        email,
        subject,
        body,
      },
    });
    return new ContactUsResponseDto(newContactUsMessage);
  }
}
