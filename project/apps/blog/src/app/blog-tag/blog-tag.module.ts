import { Module } from '@nestjs/common';
import { BlogTagController } from './blog-tag.controller';
import { BlogTagService } from './blog-tag.service';
import { BlogTagRepository } from './blog-tag.repository';

@Module({
  providers: [BlogTagService, BlogTagRepository],
  controllers: [BlogTagController],
  exports: [BlogTagService],
})
export class BlogTagModule {}
