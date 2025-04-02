import { Module } from '@nestjs/common';
import { StudentPeriodicsService } from './student-periodics.service';
import { StudentPeriodicsController } from './student-periodics.controller';
import { StudenPeriodicsRepository } from './student-periodics.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentPeriodic } from './entities/student-periodic.entity';
import { SummariesModule } from '../summaries/summaries.module';

@Module({
  imports: [TypeOrmModule.forFeature([StudentPeriodic]), SummariesModule],
  controllers: [StudentPeriodicsController],
  providers: [StudentPeriodicsService, StudenPeriodicsRepository],
})
export class StudentPeriodicsModule {}
