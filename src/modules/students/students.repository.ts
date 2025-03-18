import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { Students } from './entities/student.entity';
import { AbstractRepostory } from 'src/common/database/abstract.repository';

@Injectable()
export class StudentsRepository extends AbstractRepostory<Students> {
  protected logger = new Logger(StudentsRepository.name);

  constructor(
    @InjectRepository(Students)
    private readonly studentsRepository: Repository<Students>,
    entityManager: EntityManager,
  ) {
    super(studentsRepository, entityManager);
  }
}
