import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TagRdo {
  @ApiProperty({
    description: 'Tag unique ID',
  })
  @Expose()
  public id!: string;

  @ApiProperty({
    description: 'Tag unique name',
    example: 'tech',
  })
  @Expose()
  public name!: string;
}
