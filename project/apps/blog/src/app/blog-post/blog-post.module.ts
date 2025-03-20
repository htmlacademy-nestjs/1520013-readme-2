import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { BlogPostRepository } from './blog-post.repository';
import { PostLikeModule } from '../post-like/post-like.module';

@Module({
  providers: [BlogPostService, BlogPostRepository],
  controllers: [BlogPostController],
  exports: [],
  imports: [PostLikeModule],
})
export class BlogPostModule {}
