import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BlogPostRepository } from './blog-post.repository';
import { CreateBlogPostDto } from './dto/create-post.dto';
import { EPostStatus, IBasePost, IUser } from '@project/types';
import { BlogPostEntity } from './blog-post.entity';
import { UpdatePostDto } from './dto/update-post.dto';
import { BlogPostErrorMessage } from './blog-post.constants';

@Injectable()
export class BlogPostService {
  constructor(private readonly blogPostRepository: BlogPostRepository) {}

  async createPost(
    createdByUserId: IUser['id'],
    createDto: CreateBlogPostDto
  ): Promise<BlogPostEntity> {
    const newPsot: IBasePost = {
      authorId: createdByUserId,
      createdAt: new Date().toISOString(),
      id: '',
      publishedAt: new Date().toISOString(),
      status: EPostStatus.Published,
      tags: createDto.tags,
      repost: undefined,
    };

    const newPostEntity = new BlogPostEntity(newPsot);

    return this.blogPostRepository.save(newPostEntity);
  }

  async updatePost(
    postId: IBasePost['id'],
    updatedByUserId: IUser['id'],
    updateDto: UpdatePostDto
  ): Promise<BlogPostEntity> {
    const oldPost = await this.blogPostRepository.findById(postId);

    if (!oldPost) {
      throw new NotFoundException(BlogPostErrorMessage.PostNotFound);
    }

    if (oldPost.authorId !== updatedByUserId) {
      throw new ForbiddenException(BlogPostErrorMessage.YouAreNotOwner);
    }

    const newPost = Object.assign({}, oldPost.toPOJO(), updateDto);

    const newPostEntity = new BlogPostEntity(newPost);

    return this.blogPostRepository.update(newPost.id, newPostEntity);
  }

  async deletePost(postId: IBasePost['id']) {
    try {
      await this.blogPostRepository.deleteById(postId);
      return true;
    } catch (_error) {
      // Текущая реализация возвращает ошибку, только если tag отсутствует, поэтому можем считать, что всё хорошо и tag удален
      return true;
    }
  }

  async getPostList(): Promise<BlogPostEntity[]> {
    return this.blogPostRepository.getList();
  }

  async getDraftListForUser(userId: IUser['id']): Promise<BlogPostEntity[]> {
    return this.blogPostRepository.getDraftListForUserId(userId);
  }

  //TODO proper filter type
  async findPost(filter: string) {
    return this.blogPostRepository.findByTitle(filter);
  }
}
