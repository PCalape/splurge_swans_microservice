import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UUID } from 'bson';
import { SocialProviderEnum } from '@enums/social-provider.enum';
mongoose.set('debug', process.env.DB_LOGGING_FLAG === 'enabled');

@Schema({ timestamps: true })
export class SocialAccount {
  @Prop({ default: new UUID() })
  id?: string;

  @Prop({ default: new Date() })
  createdAt?: Date;

  @Prop({ default: new Date() })
  updatedAt?: Date;

  @Prop()
  deletedAt?: Date;

  @Prop()
  userId: string;

  @Prop()
  socialId: string;

  @Prop()
  username: string;

  @Prop()
  link: string;

  @Prop({
    enum: SocialProviderEnum,
  })
  provider: SocialProviderEnum;

  @Prop()
  isVisibleToProfile: boolean;
}

export type SwanDocument = SocialAccount & Document;
export const SocialAccountSchema = SchemaFactory.createForClass(SocialAccount);
SocialAccountSchema.index({ userId: 'text' });
