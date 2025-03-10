import { IBasePost } from './base-post.interface';

export interface ILinkPost extends IBasePost {
  type: 'link';
  content: {
    link: string;
    description?: string;
  };
}
