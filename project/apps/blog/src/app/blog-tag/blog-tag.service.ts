import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogTagRepository } from './blog-tag.repository';
import { TagErrorMessage } from './blog-tag.constants';
import { BlogTagEntity } from './blog-tag.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { ITag } from '@project/types';

@Injectable()
export class BlogTagService {
  constructor(private readonly blogTagRepository: BlogTagRepository) {}

  async getByName(name: BlogTagEntity['name']): Promise<BlogTagEntity> {
    const tag = await this.blogTagRepository.findByName(name);

    //TODO может возвращать null, а ошибку создавать в контроллере, тогда этот метод можно использовать при создании
    if (!tag) {
      throw new NotFoundException(TagErrorMessage.TagNotFound);
    }

    return tag;
  }

  async getById(id: BlogTagEntity['id']): Promise<BlogTagEntity> {
    const tag = await this.blogTagRepository.findById(id);

    if (!tag) {
      throw new NotFoundException(TagErrorMessage.TagNotFound);
    }

    return tag;
  }

  async createTag(tag: CreateTagDto): Promise<BlogTagEntity> {
    const newTag: ITag = {
      id: '',
      name: tag.name,
    };

    //TODO проверка перед созданием
    const newTagEntity = new BlogTagEntity(newTag);

    return this.blogTagRepository.save(newTagEntity);
  }

  async deleteById(tagId: BlogTagEntity['id']): Promise<boolean> {
    try {
      await this.blogTagRepository.deleteById(tagId);
      return true;
    } catch {
      // Текущая реализация возвращает ошибку, только если tag отсутствует, поэтому можем считать, что всё хорошо и tag удален
      return true;
    }
  }
}
