import { Module } from '@nestjs/common';
import { SummariesService } from './summaries.service';
import { SummariesController } from './summaries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Summary } from './entities/summary.entity';
import { SummaryRepository } from './summary.repository';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [TypeOrmModule.forFeature([Summary]), StudentsModule],
  controllers: [SummariesController],
  providers: [SummariesService, SummaryRepository],
  exports: [SummaryRepository],
})
export class SummariesModule {}
