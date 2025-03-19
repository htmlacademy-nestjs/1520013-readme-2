import { BaseMemoryRepository } from '@project/core';
import { BlogTagEntity } from './blog-tag.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogTagRepository extends BaseMemoryRepository<BlogTagEntity> {
  async findByName(name: string): Promise<BlogTagEntity | null> {
    for (const entity of this.entities.values()) {
      if (entity.name === name) {
        return entity;
      }
    }

    return null;
  }
}
