import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LoggedUserRdo {
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
    description: 'JWT token',
  })
  @Expose()
  public accessToken!: string;
}
