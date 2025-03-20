import { IBasePost } from './base-post.interface';

export interface ITextPost extends IBasePost {
  type: 'text';
  content: {
    title: string;
    announcement: string;
    text: string;
  };
}
