import { Module } from '@nestjs/common';
import { SilabusService } from './silabus.service';
import { SilabusController } from './silabus.controller';
import { SilabusRepository } from './silabus.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Silabus } from './entities/silabus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Silabus])],
  controllers: [SilabusController],
  providers: [SilabusService, SilabusRepository],
})
export class SilabusModule {}
