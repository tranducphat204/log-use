import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserIdDto {
    @ApiProperty()
    @IsString()
    user_id: string;
}

export class SessionIdDto {
    @ApiProperty()
    @IsString()
    session_id: string;
}

export class UserSessionQueryDto {
    @ApiProperty({ required: false })
    @IsString()
    user_id?: string;

    @ApiProperty({ required: false })
    @IsString()
    session_id?: string;
}
