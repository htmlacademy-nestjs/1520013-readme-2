import { IBasePost } from './base-post.interface';

export interface IPhotoPost extends IBasePost {
  type: 'photo';
  content: {
    image: string;
  };
}
