import { IUser } from '../../user';
import { IBasePost } from '../post';

export interface IComment {
  id: string;
  message: string;
  authorId: IUser['id'];
  postId: IBasePost['id'];
  createdAt: string;
}
