import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateFounderMessageParams {
  name: string;
  designation: string;
  body: string;
}

@Injectable()
export class FounderMessageService {
  constructor(private readonly prismaService: PrismaService) {}

  async createFounderMessage({
    name,
    designation,
    body,
  }: CreateFounderMessageParams) {
    const founderMessage = await this.prismaService.messageFromFounder.create({
      data: {
        name,
        designation,
        body,
      },
    });

    return founderMessage;
  }
}
