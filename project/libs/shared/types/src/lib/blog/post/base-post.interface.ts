import { IUser } from '../../user';
import { ITag } from '../tag';
import { EPostStatus } from './post-status.enum';

export interface IBasePost {
  id: number;
  authorId: IUser['id'];
  status: EPostStatus;
  tags: ITag['id'][];
  publishedAt: string;
  createdAt: string;
  repost?: {
    originalPostId: IBasePost['id'];
  };
}
