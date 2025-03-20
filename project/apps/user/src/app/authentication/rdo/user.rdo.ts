import { ApiProperty } from '@nestjs/swagger';
import { EUserRole } from '@project/types';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'User unique ID',
  })
  @Expose()
  public id!: string;

  @ApiProperty({
    description: 'User unique email',
    example: 'example@mail.com',
  })
  @Expose()
  public email!: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Tony',
  })
  @Expose()
  public firstname!: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Hawk',
  })
  @Expose()
  public lastname!: string;

  @ApiProperty({
    description: 'User avatar link',
  })
  @Expose()
  public avatar?: string;

  @ApiProperty({
    description: 'User role',
    enum: EUserRole,
  })
  @Expose()
  public role!: EUserRole;

  @ApiProperty({
    description: 'User account create date',
  })
  @Expose()
  public createdAt!: string;
}
