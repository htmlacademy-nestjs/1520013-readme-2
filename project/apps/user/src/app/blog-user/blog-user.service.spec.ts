import { Test, TestingModule } from '@nestjs/testing';
import { BlogUserService } from './blog-user.service';

describe('BlogUserService', () => {
  let service: BlogUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogUserService],
    }).compile();

    service = module.get<BlogUserService>(BlogUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
