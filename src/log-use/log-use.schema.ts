import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'log_use' })
export class LogUse extends Document {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  session_id: string;

  @Prop({ required: true })
  action: string;

  @Prop()
  label: string;

  @Prop()
  current_url: string;

  @Prop({ type: Date, default: Date.now })
  timestamp: Date;

  @Prop({
    type: {
      browser: String,
      os: String,
      screen: {
        width: Number,
        height: Number,
      },
    },
  })
  device: {
    browser: string;
    os: string;
    screen: {
      width: number;
      height: number;
    };
  };

  @Prop({
    type: {
      ip: String,
      city: String,
      country: String,
    },
  })
  location: {
    ip: string;
    city: string;
    country: string;
  };

  @Prop({ type: Object })
  reference: Record<string, any>;
}

export const LogUseSchema = SchemaFactory.createForClass(LogUse);
