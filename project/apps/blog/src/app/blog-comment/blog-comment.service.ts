import { Injectable } from '@nestjs/common';
import { IBasePost, IComment } from '@project/types';
import { BlogCommentEntity } from './blog-comment.entity';
import { BlogCommentRepository } from './blog-comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class BlogCommentService {
  constructor(private readonly blogCommentRepository: BlogCommentRepository) {}

  //TODO pagination
  public async getListByBlogPostId(
    blogPostId: IBasePost['id']
  ): Promise<BlogCommentEntity[]> {
    return this.blogCommentRepository.findManyByPostId(blogPostId);
  }

  public async createComment(
    blogPostId: IBasePost['id'],
    comment: CreateCommentDto
  ): Promise<BlogCommentEntity> {
    const newComment: IComment = {
      id: '',
      authorId: '//TODO',
      postId: blogPostId,
      createdAt: new Date().toISOString(),
      message: comment.messaage,
    };

    const newCommentEntity = new BlogCommentEntity(newComment);

    return this.blogCommentRepository.save(newCommentEntity);
  }

  public async deleteComment(commentId: IComment['id']): Promise<boolean> {
    try {
      await this.blogCommentRepository.deleteById(commentId);
      return true;
    } catch {
      // Текущая реализация возвращает ошибку, только если tag отсутствует, поэтому можем считать, что всё хорошо и tag удален
      return true;
    }
  }
}
