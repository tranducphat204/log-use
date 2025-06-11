
import { IsString, IsOptional, IsObject, IsDate } from 'class-validator';

export class CreateLogUseDto {
  @IsString()
  user_id: string;

  @IsString()
  session_id: string;

  @IsString()
  action: string;

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  url?: string;

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
