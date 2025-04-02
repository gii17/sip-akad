import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { StudentsRepository } from './students.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Students])],
  controllers: [StudentsController],
  providers: [StudentsService, StudentsRepository],
  exports: [StudentsRepository],
})
export class StudentsModule {}
