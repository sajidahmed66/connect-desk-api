import { Body, Controller, Post } from '@nestjs/common';
import { createContactUsDto } from './dtos/contact-us.dto';
import { ContactUsService } from './contact-us.service';

@Controller('contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Post('')
  createContactUs(@Body() body: createContactUsDto) {
    return this.contactUsService.createContactUs(body);
  }
}
