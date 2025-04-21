import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { Schedule } from './entities/schedule.entity';
import { FindAllScheduleDto } from './dto/find-all-schedule.dto';

@Injectable()
export class ScheduleRepository extends AbstractRepository<Schedule> {
  protected logger: Logger = new Logger(ScheduleRepository.name);

  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
    entityManager: EntityManager,
  ) {
    super(scheduleRepository, entityManager);
  }

  // async beforeCreate(entity: Schedule): Promise<void> {
  //   // Contoh validasi sebelum create
  //   if (entity.mapel_id === 1) {
  //     throw new InternalServerErrorException('Mapel tidak ditemukan');
  //   }
  // }

  selectFindAll(
    findAllScheduleDto: FindAllScheduleDto,
  ): SelectQueryBuilder<Schedule> {
    return this.scheduleRepository.createQueryBuilder('schedule');
  }
}
