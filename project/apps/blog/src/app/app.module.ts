import { Module } from '@nestjs/common';
import { BlogTagModule } from './blog-tag/blog-tag.module';
import { BlogCommentModule } from './blog-comment/blog-comment.module';

@Module({
  imports: [BlogTagModule, BlogCommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
