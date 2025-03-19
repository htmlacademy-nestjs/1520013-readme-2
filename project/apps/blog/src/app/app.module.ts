import { Module } from '@nestjs/common';
import { BlogTagModule } from './blog-tag/blog-tag.module';

@Module({
  imports: [BlogTagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
