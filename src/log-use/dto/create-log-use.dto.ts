
import { IsString, IsOptional, IsObject, IsDate } from 'class-validator';

export class CreateLogUseDto {
  @IsString()
  userId: string;

  @IsString()
  sessionId: string;

  @IsString()
  action: string;

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  current_url?: string;

  @IsOptional()
  @IsDate()
  timestamp?: Date;

  @IsOptional()
  @IsObject()
  device?: {
    browser?: string;
    os?: string;
    screen?: {
      width?: number;
      height?: number;
    };
  };

  @IsOptional()
  @IsObject()
  location?: {
    ip?: string;
    city?: string;
    country?: string;
  };

  @IsOptional()
  @IsObject()
  reference?: Record<string, any>;
}
