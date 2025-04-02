import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepostory } from 'src/common/database/abstract.repository';
import { EntityManager, Repository } from 'typeorm';
import { Summary } from './entities/summary.entity';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { StudentsRepository } from '../students/students.repository';

@Injectable()
export class SummaryRepository extends AbstractRepostory<Summary> {
  protected logger: Logger = new Logger(SummaryRepository.name);

  constructor(
    @InjectRepository(Summary)
    private readonly silabusRepository: Repository<Summary>,
    entityManager: EntityManager,
    private readonly studentRepository: StudentsRepository,
  ) {
    super(silabusRepository, entityManager);
  }

  async beforeCreate(createSummaryDto: CreateSummaryDto) {
    await this.studentRepository.findOne({ id: createSummaryDto.modelId });
  }
}
