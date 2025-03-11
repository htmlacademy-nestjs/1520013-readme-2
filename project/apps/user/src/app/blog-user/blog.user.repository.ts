import { BaseMemoryRepository } from '@project/core';
import { BlogUserEntity } from './blog-user.entity';
import { Injectable } from '@nestjs/common';
import { getDateNow } from '@project/helpers';

@Injectable()
export class BlogUserRepository extends BaseMemoryRepository<BlogUserEntity> {
  async findByEmail(email: string): Promise<null | BlogUserEntity> {
    for (const entity of this.entities.values()) {
      if (entity.email === email) {
        return entity;
      }
    }

    return null;
  }

  async save(entity: BlogUserEntity): Promise<BlogUserEntity> {
    entity.createdAt = getDateNow();
    return super.save(entity);
  }
}
