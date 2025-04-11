import { EUserRole } from './user-role.enum';

export interface IUser {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  avatar?: string; // TODO пока стринг, потом скорее всего это будет референс к файлу
  role: EUserRole;
  createdAt: Date;
}
