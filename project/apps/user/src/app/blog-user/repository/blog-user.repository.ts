import { Repository } from '@project/core';
import { BlogUserEntity } from '../blog-user.entity';

export abstract class BlogUserRepository implements Repository<BlogUserEntity> {
  abstract findById(id: string): Promise<BlogUserEntity | null>;

  abstract findByEmail(email: string): Promise<BlogUserEntity | null>;

  abstract save(entity: BlogUserEntity): Promise<BlogUserEntity>;

  abstract update(id: string, entity: BlogUserEntity): Promise<BlogUserEntity>;

  abstract deleteById(id: string): Promise<void>;
}
