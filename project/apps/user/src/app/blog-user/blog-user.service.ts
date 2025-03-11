import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '@project/types';
import { BlogUserRepository } from './blog.user.repository';
import { BlogUserEntity } from './blog-user.entity';
import { BlogUserErrorMessage } from './blog-user.constants';

@Injectable()
export class BlogUserService {
  constructor(private readonly blogUserRepository: BlogUserRepository) {}

  async getUser(id: IUser['id']): Promise<BlogUserEntity> {
    const user = await this.blogUserRepository.findById(id);

    if (!user) {
      throw new NotFoundException(BlogUserErrorMessage.UserNotFound);
    }

    return user;
  }
}
