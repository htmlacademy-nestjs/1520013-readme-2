import { IUser } from '../../user';
import { IBasePost } from '../post/base-post.interface';

export interface IPostLike {
  postId: IBasePost['id'];
  likedBy: IUser['id'];
}
