import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepostory } from 'src/common/database/abstract.repository';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { Building } from './entities/building.entity';
// import { FindAllSilabusDto } from './dto/find-all-room.dto';

@Injectable()
export class BuildingRepository extends AbstractRepostory<Building> {
  protected logger: Logger = new Logger(BuildingRepository.name);

  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
    entityManager: EntityManager,
  ) {
    super(buildingRepository, entityManager);
  }
}
