import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BlogPostService } from './blog-post.service';
import { BlogPostRdo } from './rdo/blog-post.rdo';
import { CreateBlogPostDto } from './dto/create-post.dto';
import { fillDto } from '@project/helpers';
import { UpdatePostDto } from './dto/update-post.dto';
import { IBasePost } from '@project/types';
import { PostLikeService } from '../post-like/post-like.service';

@ApiTags('Blog post')
@Controller('post')
export class BlogPostController {
  constructor(
    private readonly postService: BlogPostService,
    private readonly likeService: PostLikeService
  ) {}

  @ApiResponse({
    type: BlogPostRdo,
    description: 'Creted post',
    status: HttpStatus.CREATED,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('/create')
  //TODO extract user id from JWT
  public async createPost(
    @Body() dto: CreateBlogPostDto
  ): Promise<BlogPostRdo> {
    const newPost = await this.postService.createPost('123', dto);

    return fillDto(BlogPostRdo, newPost.toPOJO());
  }

  @ApiResponse({
    type: BlogPostRdo,
    description: 'Updated post',
    status: HttpStatus.CREATED,
  })
  @ApiResponse({
    description: 'Post to update not found',
    status: HttpStatus.NOT_FOUND,
  })
  @ApiResponse({
    description: 'You are not owner of the post',
    status: HttpStatus.FORBIDDEN,
  })
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'postId',
    type: String,
    description: 'post id to update',
  })
  //TODO extract user id from JWT
  @Patch('/:postId')
  public async updatePost(
    @Param('postId') postId: IBasePost['id'],
    @Body() dto: UpdatePostDto
  ): Promise<BlogPostRdo> {
    //TODO actual user
    const updatedPost = await this.postService.updatePost(postId, '123', dto);

    return fillDto(BlogPostRdo, updatedPost.toPOJO());
  }

  @ApiParam({
    name: 'postId',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Post with provided ID was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:postId')
  public async deleteById(@Param('postId') id: IBasePost['id']): Promise<void> {
    await this.postService.deletePost(id);

    return void 0;
  }

  @ApiParam({
    name: 'postId',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Like toggle',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  //TODO extract user id from JWT
  @Patch('/:postId/like/toggle')
  public async toggleLike(@Param('postId') id: IBasePost['id']) {
    await this.likeService.toggleLike(id, '123');

    //TODO proper response
    return void 0;
  }

  @ApiResponse({
    type: BlogPostRdo,
    isArray: true,
    status: HttpStatus.OK,
    description: 'Get all posts',
  })
  @Get('/list')
  public async getPostsLsit(): Promise<BlogPostRdo[]> {
    const posts = await this.postService.getPostList();

    return fillDto(
      BlogPostRdo,
      posts.map((entity) => entity.toPOJO())
    );
  }

  @ApiResponse({
    type: BlogPostRdo,
    isArray: true,
    status: HttpStatus.OK,
    description: 'Get post drafts for user',
  })
  @Get('/my-draft/list')
  //TODO extract user id from JWT
  public async getDraftsForUserId(): Promise<BlogPostRdo[]> {
    //TODO actual user id
    const posts = await this.postService.getDraftListForUser('123');

    return fillDto(
      BlogPostRdo,
      posts.map((entity) => entity.toPOJO())
    );
  }

  @ApiResponse({
    type: BlogPostRdo,
    isArray: true,
    status: HttpStatus.OK,
    description: 'Find posts by title',
  })
  @ApiQuery({
    name: 'title',
    type: String,
    required: true,
  })
  @Get('/search')
  //TODO extract user id from JWT
  public async findPosts(
    @Query('title') title: string
  ): Promise<BlogPostRdo[]> {
    const posts = await this.postService.findPost(title);

    return fillDto(
      BlogPostRdo,
      posts.map((entity) => entity.toPOJO())
    );
  }
}
