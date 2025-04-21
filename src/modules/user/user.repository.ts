import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { EntityManager, FindOptionsWhere, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends AbstractRepository<User> {
  protected logger: Logger = new Logger(User.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    entityManager: EntityManager,
  ) {
    super(userRepository, entityManager);
  }

  async findOneBys(where: FindOptionsWhere<User>[]) {
    const user = await this.userRepository.findOne({
      where: [...where],
    });

    if (!user) {
      this.logger.warn(`User not found with ${JSON.stringify(where)}`);
      return null;
    }

    return user;
  }

  async validateUnique(entity: User) {
    const existingUser = await this.findOneBys([
      {
        email: entity.email,
      },
      {
        username: entity.username,
      },
    ]);

    if (existingUser) {
      this.logger.warn(`User with email ${entity.email} already exists`);
      throw new ConflictException('User with this email already exists');
    }
  }

  async beforeCreate(entity: User): Promise<void> {
    await this.validateUnique(entity);
  }
}
