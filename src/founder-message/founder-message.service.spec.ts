import { Test, TestingModule } from '@nestjs/testing';
import { FounderMessageService } from './founder-message.service';

describe('FounderMessageService', () => {
  let service: FounderMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FounderMessageService],
    }).compile();

    service = module.get<FounderMessageService>(FounderMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
