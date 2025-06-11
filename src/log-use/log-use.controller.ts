
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LogUseService } from './log-use.service';
import { CreateLogUseDto } from './dto/create-log-use.dto';

@Controller('log-use')
export class LogUseController {
    constructor(private readonly logUseService: LogUseService) { }

    @Post()
    async createLog(@Body() createLogUseDto: CreateLogUseDto) {
        return this.logUseService.create(createLogUseDto);
    }

    @Get('user/:userId')
    async getLogsByUserId(@Param('userId') userId: string) {
        return this.logUseService.findByUserId(userId);
    }

    @Get('session/:sessionId')
    async getLogsBySessionId(@Param('sessionId') sessionId: string) {
        return this.logUseService.findBySessionId(sessionId);
    }

    @Get()
    async getLogs(@Query('user_id') userId?: string, @Query('session_id') sessionId?: string) {
        return this.logUseService.findLogs({ user_id: userId, session_id: sessionId });
    }
}
