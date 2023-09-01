import { Test, TestingModule } from '@nestjs/testing';
import { SiteUseTutorialService } from './site-use-tutorial.service';

describe('SiteUseTutorialService', () => {
  let service: SiteUseTutorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteUseTutorialService],
    }).compile();

    service = module.get<SiteUseTutorialService>(SiteUseTutorialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
