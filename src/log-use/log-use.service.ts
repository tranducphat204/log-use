import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLogUseDto } from './dto/create-log-use.dto';
import { LogUse } from './log-use.schema';

@Injectable()
export class LogUseService {
  constructor(@InjectModel(LogUse.name) private logUseModel: Model<LogUse>) {}

  async create(createLogUseDto: CreateLogUseDto): Promise<LogUse> {
    const createdLog = new this.logUseModel(createLogUseDto);
    return createdLog.save();
  }

  async findByUserId(user_id?: string) {
    const filter = user_id ? { user_id: user_id } : {};
    return this.logUseModel.find(filter).sort({ timestamp: -1 }).exec();
  }

  async findBySessionId(session_id: string) {
    return this.logUseModel
      .find({ session_id: session_id })
      .sort({ timestamp: -1 })
      .exec();
  }

  async findLogs(filters: { user_id?: string; session_id?: string }) {
    const query: any = {};
    if (filters.user_id) query.user_id = filters.user_id;
    if (filters.session_id) query.session_id = filters.session_id;

    return this.logUseModel.find(query).sort({ timestamp: -1 }).exec();
  }
}
