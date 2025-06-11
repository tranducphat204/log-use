import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogUseService } from './log-use.service';
import { LogUseController } from './log-use.controller';
import { LogUse, LogUseSchema } from './log-use.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: LogUse.name, schema: LogUseSchema }]),
    ],
    controllers: [LogUseController],
    providers: [LogUseService],
    exports: [LogUseService],
})
export class LogUseModule { }
