import { IBasePost } from './base-post.interface';
import { ILinkPost } from './link-post.interface';
import { IPhotoPost } from './photo-post.interface';
import { IQuotePost } from './quote-post.interface';
import { ITextPost } from './text-post.interface';
import { IVideoPost } from './video-post.interface';

type BlogPostUnion =
  | ILinkPost
  | IPhotoPost
  | IQuotePost
  | ITextPost
  | IVideoPost;

export type BlogPost = IBasePost & BlogPostUnion;
