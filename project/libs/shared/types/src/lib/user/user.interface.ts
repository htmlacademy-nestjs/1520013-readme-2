import { EUserRole } from './user-role.enum';

export interface IUser {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  dob: string;
  avatar?: string;
  role: EUserRole;
  createdAt: string;
}
