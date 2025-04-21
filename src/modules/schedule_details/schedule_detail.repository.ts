import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { ScheduleDetail } from './entities/schedule_detail.entity';
import { FindAllScheduleDetailDto } from './dto/find-all-schedule-detail.dto';

@Injectable()
export class ScheduleDetailRepository extends AbstractRepository<ScheduleDetail> {
  protected logger: Logger = new Logger(ScheduleDetailRepository.name);

  constructor(
    @InjectRepository(ScheduleDetail)
    private readonly scheduleDetailRepository: Repository<ScheduleDetail>,
    entityManager: EntityManager,
  ) {
    super(scheduleDetailRepository, entityManager);
  }

  // async beforeCreate(entity: ScheduleDetail): Promise<void> {
  //   // Contoh validasi sebelum create
  //   if (entity.id === 1) {
  //     throw new InternalServerErrorException('Mapel tidak ditemukan');
  //   }
  // }

  selectFindAll(
    findAllScheduleDetailDto: FindAllScheduleDetailDto,
  ): SelectQueryBuilder<ScheduleDetail> {
    return this.scheduleDetailRepository.createQueryBuilder('schedule_detail');
  }
}
