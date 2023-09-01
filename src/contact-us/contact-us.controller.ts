import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ContactUsResponseDto,
  createContactUsDto,
} from './dtos/contact-us.dto';
import { ContactUsService } from './contact-us.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from '@prisma/client';

@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Roles(UserType.ADMIN)
  @Get('')
  getContactUs(): Promise<ContactUsResponseDto[]> {
    return this.contactUsService.getContactUs();
  }

  @Post('')
  createContactUs(@Body() body: createContactUsDto) {
    return this.contactUsService.createContactUs(body);
  }
}
