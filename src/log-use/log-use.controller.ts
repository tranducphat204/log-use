import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LogUseService } from './log-use.service';
import { CreateLogUseDto } from './dto/create-log-use.dto';
import { SessionIdDto, UserIdDto, UserSessionQueryDto } from './dto/request-use-log.dto';

@Controller('log-use')
export class LogUseController {
  constructor(private readonly logUseService: LogUseService) { }

  @Post()
  async createLog(@Body() createLogUseDto: CreateLogUseDto) {
    return this.logUseService.create(createLogUseDto);
  }

  @Post('user')
  async getLogsByUserId(@Body() dto: UserIdDto) {
    const data = await this.logUseService.findByUserId(dto.user_id);
    return {
      status: 200,
      data,
    };
  }

  @Post('session')
  async getLogsBySessionId(@Body() dto: SessionIdDto) {
    const data = await this.logUseService.findBySessionId(dto.session_id);
    return { status: 200, data };
  }

  @Post('queryByUser-session')
  async getLogs(@Body() dto: UserSessionQueryDto) {
    const data = await this.logUseService.findLogs({
      user_id: dto.user_id,
      session_id: dto.session_id,
    });
    return { status: 200, data };
  }

}
