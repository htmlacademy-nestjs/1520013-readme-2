import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique email',
    example: 'example@mail.com',
  })
  public email!: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Tony',
    minLength: 3,
    maxLength: 50,
  })
  public firstname!: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Hawk',
    minLength: 3,
    maxLength: 50,
  })
  public lastname!: string;

  @ApiProperty({
    description: 'User password',
    example: 'verySecurePa55word',
    minLength: 6,
    maxLength: 12,
  })
  public password!: string;

  @ApiProperty({
    description: 'User avarar',
    deprecated: true,
    required: false,
  })
  public avatar?: string;
}
