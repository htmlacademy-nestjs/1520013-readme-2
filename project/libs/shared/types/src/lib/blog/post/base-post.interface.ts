import { IUser } from '../../user';
import { ITag } from '../tag';
import { EPostStatus } from './post-status.enum';

export interface IBasePost {
  id: string;
  authorId: IUser['id'];
  status: EPostStatus;
  tags: ITag['id'][];
  publishedAt: string;
  createdAt: string;
  repost?: {
    originalPostId: IBasePost['id'];
  };
}
