import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseMongoRepository } from '@project/core';
import { Model } from 'mongoose';
import { BlogUserEntity } from './blog-user.entity';
import { BlogUserModel } from './blog-user.model';

@Injectable()
export class BlogUserRepository extends BaseMongoRepository<
  BlogUserEntity,
  BlogUserModel
> {
  constructor(
    @InjectModel(BlogUserModel.name) blogUserModel: Model<BlogUserModel>
  ) {
    super(blogUserModel, BlogUserEntity.fromObject);
  }

  async findByEmail(email: string): Promise<null | BlogUserEntity> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
