import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepostory } from 'src/common/database/abstract.repository';
import { EntityManager, Repository } from 'typeorm';
import { People } from './entities/people.entity';

@Injectable()
export class PeopleRepository extends AbstractRepostory<People> {
  protected logger: Logger = new Logger(People.name);

  constructor(
    @InjectRepository(People)
    peopleRepository: Repository<People>,
    entityManager: EntityManager,
  ) {
    super(peopleRepository, entityManager);
  }
}
