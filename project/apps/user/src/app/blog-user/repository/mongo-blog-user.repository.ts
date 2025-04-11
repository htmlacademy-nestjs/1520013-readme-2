import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseMongoRepository } from '@project/core';
import { Model } from 'mongoose';
import { BlogUserEntity } from '../blog-user.entity';
import { BlogUserModel } from '../blog-user.model';
import { BlogUserRepository } from './blog-user.repository';

@Injectable()
export class MongoBlogUserRepository
  extends BaseMongoRepository<BlogUserEntity, BlogUserModel>
  implements BlogUserRepository
{
  constructor(
    @InjectModel(BlogUserModel.name) blogUserModel: Model<BlogUserModel>
  ) {
    super(blogUserModel, BlogUserEntity.fromObject);
  }

  async findByEmail(email: string): Promise<BlogUserEntity | null> {
    const document = await this.model.findOne({ email }).exec();

    return this.createEntityFromDocument(document);
  }
}
