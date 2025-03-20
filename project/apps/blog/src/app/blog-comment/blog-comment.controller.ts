import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BlogCommentService } from './blog-comment.service';
import { IBasePost, IComment } from '@project/types';
import { CreateCommentDto } from './dto/create-comment.dto';
import { fillDto } from '@project/helpers';
import { CommentRdo } from './rdo/comment.rdo';

@ApiTags('Blog comment')
@Controller('comment')
export class BlogCommentController {
  constructor(private readonly commentService: BlogCommentService) {}

  @ApiResponse({
    type: CommentRdo,
    isArray: true,
    status: HttpStatus.OK,
    description: 'List of comments for provided post id',
  })
  @ApiParam({
    name: 'postId',
    type: String,
  })
  @Get('/:postId/list')
  public async getCommentsForBlogPost(
    @Param('postId') postId: IBasePost['id']
  ): Promise<CommentRdo[]> {
    const comments = await this.commentService.getListByBlogPostId(postId);

    return fillDto(
      CommentRdo,
      comments.map((entity) => entity.toPOJO())
    );
  }

  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'Comment was created',
  })
  @ApiParam({
    name: 'postId',
    description: 'Post id where comment belongs',
    type: String,
  })
  @Post('/:postId')
  public async createComment(
    @Param('postId') postId: IBasePost['id'],
    @Body() comment: CreateCommentDto
  ): Promise<CommentRdo> {
    const newComment = await this.commentService.createComment(postId, comment);

    console.warn('newComment', newComment);

    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Comemnt with provided ID was deleted',
  })
  @ApiParam({ name: 'commentId', description: 'Comment id to delete' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:commentId')
  public async deleteComment(
    @Param('commentId') commentId: IComment['id']
  ): Promise<void> {
    await this.commentService.deleteComment(commentId);

    return void 0;
  }
}
