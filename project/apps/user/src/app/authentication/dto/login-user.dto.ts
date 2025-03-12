import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    description: 'User unique email',
    example: 'example@mail.com',
  })
  public email!: string;

  @ApiProperty({
    description: 'User password',
    example: 'verySecurePa55word',
    minLength: 6,
    maxLength: 12,
  })
  public password!: string;
}
