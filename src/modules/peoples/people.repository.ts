import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { AbstractRepostory } from 'src/common/database/abstract.repository';
import { People } from './entities/people.entity';

@Injectable()
export class PeopleRepository extends AbstractRepostory<People> {
  protected logger: Logger = new Logger(PeopleRepository.name);

  constructor(
    @InjectRepository(People)
    private readonly peopleRepository: Repository<People>,
    entityManager: EntityManager,
  ) {
    super(peopleRepository, entityManager);
  }

  async findOneWithRelations(id: string): Promise<People> {
    const people = await this.peopleRepository.findOne({
      where: { id },
      relations: ['student', 'employee'],
    });

    if (!people) {
      throw new NotFoundException('People not found');
    }

    return people;
  }
}

// import { Injectable, Logger } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { AbstractRepostory } from 'src/common/database/abstract.repository';
// import { EntityManager, Repository } from 'typeorm';
// import { People } from './entities/people.entity';

// @Injectable()
// export class PeopleRepository extends AbstractRepostory<People> {
//   protected logger: Logger = new Logger(People.name);

//   constructor(
//     @InjectRepository(People)
//     peopleRepository: Repository<People>,
//     entityManager: EntityManager,
//   ) {
//     super(peopleRepository, entityManager);
//   }
// }
