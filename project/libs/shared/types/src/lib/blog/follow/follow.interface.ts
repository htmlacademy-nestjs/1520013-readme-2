import { IUser } from '../../user';

export interface IFollow {
  followerId: IUser['id'];
  followeeId: IUser['id'];
}
