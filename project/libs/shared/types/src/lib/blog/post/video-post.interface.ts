import { IBasePost } from './base-post.interface';

export interface IVideoPost extends IBasePost {
  type: 'video';
  content: {
    title: string;
    videoLink: string;
  };
}
