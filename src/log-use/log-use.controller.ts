import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LogUseService } from './log-use.service';
import { CreateLogUseDto } from './dto/create-log-use.dto';

@Controller('log-use')
export class LogUseController {
  constructor(private readonly logUseService: LogUseService) {}

  @Post()
  async createLog(@Body() createLogUseDto: CreateLogUseDto) {
    return this.logUseService.create(createLogUseDto);
  }

  @Post('user')
  async getLogsByUserId(@Body('user_id') user_id: string) {
    const data = await this.logUseService.findByUserId(user_id);
    return {
      status: 200,
      data,
    };
  }

  @Post('session')
  async getLogsBySessionId(@Body('session_id') session_id: string) {
    const data = await this.logUseService.findBySessionId(session_id);
    return {
      status: 200,
      data,
    };
  }

  @Get()
  async getLogs(
    @Query('user_id') user_id?: string,
    @Query('session_id') session_id?: string,
  ) {
    return this.logUseService.findLogs({
      user_id: user_id,
      session_id: session_id,
    });
  }
}
