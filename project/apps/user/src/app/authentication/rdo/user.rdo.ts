import { EUserRole } from '@project/types';
import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public id!: string;

  @Expose()
  public email!: string;

  @Expose()
  public firstname!: string;

  @Expose()
  public lastname!: string;

  @Expose()
  public avatar?: string;

  @Expose()
  public role!: EUserRole;

  @Expose()
  public createdAt!: string;
}
