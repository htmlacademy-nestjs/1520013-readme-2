import { IUser } from './user.interface';

export interface IUserWithPassword extends IUser {
  passwordHash: string;
}
