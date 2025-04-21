import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { EntityManager, Repository } from 'typeorm';
import { StudentPeriodic } from './entities/student-periodic.entity';
import { CreateStudentPeriodicDto } from './dto/create-student-periodic.dto';
import { SummaryRepository } from '../summaries/summary.repository';

@Injectable()
export class StudenPeriodicsRepository extends AbstractRepository<StudentPeriodic> {
  protected logger: Logger = new Logger(StudenPeriodicsRepository.name);

  constructor(
    @InjectRepository(StudentPeriodic)
    private readonly studentPeriodicsRepository: Repository<StudentPeriodic>,
    entityManager: EntityManager,
    private readonly summaryRepository: SummaryRepository,
  ) {
    super(studentPeriodicsRepository, entityManager);
  }

  async beforeCreate(
    createStudentPeriodics: CreateStudentPeriodicDto,
  ): Promise<void> {
    await this.summaryRepository.findOne({
      id: createStudentPeriodics.summaryId,
    });
  }
}
