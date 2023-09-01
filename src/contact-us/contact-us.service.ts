import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateContactUsParams {
  name: string;
  email: string;
  subject: string;
  body: string;
}

@Injectable()
export class ContactUsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createContactUs({ name, email, subject, body }: CreateContactUsParams) {
    const newContactUsMessage = await this.prismaService.contactUs.create({
      data: {
        name,
        email,
        subject,
        body,
      },
    });
    return newContactUsMessage;
  }
}
