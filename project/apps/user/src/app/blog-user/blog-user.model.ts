import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EUserRole, IUserWithPassword } from '@project/types';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
  id: true,
})
export class BlogUserModel extends Document implements IUserWithPassword {
  id!: string;

  @Prop({
    required: true,
  })
  public passwordHash!: string;

  @Prop({
    required: true,
  })
  email!: string;

  @Prop({
    required: true,
  })
  firstname!: string;

  @Prop({
    required: true,
  })
  lastname!: string;

  @Prop({
    required: false,
    type: String,
  })
  avatar?: string | undefined;

  @Prop({
    required: true,
    type: String,
    enum: EUserRole,
    default: EUserRole.User,
  })
  role: EUserRole = EUserRole.User;

  @Prop()
  createdAt!: Date;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
