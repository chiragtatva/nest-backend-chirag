import { Test, TestingModule } from '@nestjs/testing';
import { SmeHealthService } from './sme-health.service';

describe('SmeHealthService', () => {
  let service: SmeHealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmeHealthService],
    }).compile();

    service = module.get<SmeHealthService>(SmeHealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
