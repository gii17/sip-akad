import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomRepository } from './room.repository';
import { FindAllSilabusDto } from '../silabus/dto/find-all-silabus.dto';

@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepository){}

  create(createRoomDto: CreateRoomDto) {
    return this.roomRepository.create(createRoomDto);
  }

  findAll(findAllSilabusDto: FindAllSilabusDto) {
    return this.roomRepository.findAll(findAllSilabusDto);
  }

  findOne(id: string) {
    return this.roomRepository.findOne({ id });
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    return this.roomRepository.findOneAndUpdate({ id }, updateRoomDto);
  }

  remove(id: string) {
    return this.roomRepository.findOneAndDelete({ id });
  }
}
