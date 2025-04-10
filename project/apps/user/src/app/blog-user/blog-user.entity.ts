import { Entity } from '@project/core';
import { EUserRole, IUserWithPassword } from '@project/types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constants';

export class BlogUserEntity implements IUserWithPassword, Entity<string> {
  public passwordHash!: string;
  public id!: string;
  public email!: string;
  public firstname!: string;
  public lastname!: string;
  public avatar?: string;
  public role!: EUserRole;
  public createdAt!: Date;

  constructor(user: IUserWithPassword) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      role: this.role,
      passwordHash: this.passwordHash,
      avatar: this.avatar,
      createdAt: this.createdAt,
    };
  }

  public populate(data: IUserWithPassword): void {
    this.id = data.id;
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.role = data.role;
    this.passwordHash = data.passwordHash;
    this.avatar = data.avatar;
    this.createdAt = data.createdAt;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  static fromObject(data: IUserWithPassword): BlogUserEntity {
    return new BlogUserEntity(data);
  }
}
