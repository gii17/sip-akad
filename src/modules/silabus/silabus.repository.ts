import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepostory } from 'src/common/database/abstract.repository';
import { EntityManager, Repository } from 'typeorm';
import { Silabus } from './entities/silabus.entity';

@Injectable()
export class SilabusRepository extends AbstractRepostory<Silabus> {
  protected logger: Logger = new Logger(SilabusRepository.name);

  constructor(
    @InjectRepository(Silabus)
    reservationRepository: Repository<Silabus>,
    entityManager: EntityManager,
  ) {
    super(reservationRepository, entityManager);
  }
}
