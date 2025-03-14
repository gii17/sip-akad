import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepostory } from 'src/common/database/abstract.repository';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { Silabus } from './entities/silabus.entity';
import { FindAllSilabusDto } from './dto/find-all-silabus.dto';

@Injectable()
export class SilabusRepository extends AbstractRepostory<Silabus> {
  protected logger: Logger = new Logger(SilabusRepository.name);

  constructor(
    @InjectRepository(Silabus)
    private readonly silabusRepository: Repository<Silabus>,
    entityManager: EntityManager,
  ) {
    super(silabusRepository, entityManager);
  }

  async beforeCreate(entity: Silabus): Promise<void> {
    // Contoh validasi sebelum create
    if (entity.mapel_id === 1) {
      throw new InternalServerErrorException('Mapel tidak ditemukan');
    }
  }

  selectFindAll(
    findAllSilabusDto: FindAllSilabusDto,
  ): SelectQueryBuilder<Silabus> {
    return this.silabusRepository.createQueryBuilder('silabus');
  }
}
