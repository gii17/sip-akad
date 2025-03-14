import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepostory } from 'src/common/database/abstract.repository';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends AbstractRepostory<User> {
  protected logger: Logger = new Logger(User.name);

  constructor(
    @InjectRepository(User)
    userRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(userRepository, entityManager);
  }
}
