import { IUser } from '../../user';
import { IBasePost } from '../post/base-post.interface';

export interface IPostLike {
  id: string;
  postId: IBasePost['id'];
  likedBy: IUser['id'];
}
