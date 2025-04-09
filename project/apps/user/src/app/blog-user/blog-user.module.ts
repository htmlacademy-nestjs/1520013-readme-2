import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogUserController } from './blog-user.controller';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';
import { BlogUserService } from './blog-user.service';
import { BlogUserRepository } from './blog.user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogUserModel.name, schema: BlogUserSchema },
    ]),
  ],
  providers: [BlogUserService, BlogUserRepository],
  controllers: [BlogUserController],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
