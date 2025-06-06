import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { Room } from './entities/room.entity';
import { FindAllRoomDto } from './dto/find-all-room.dto';

@Injectable()
export class RoomRepository extends AbstractRepository<Room> {
  protected logger: Logger = new Logger(RoomRepository.name);

  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    entityManager: EntityManager,
  ) {
    super(roomRepository, entityManager);
  }

  selectFindAll(FindAllRoomDto: FindAllRoomDto): SelectQueryBuilder<Room> {
    return this.roomRepository.createQueryBuilder('room');
  }
}
