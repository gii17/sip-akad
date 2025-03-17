import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Role } from 'src/common/decorator/role.decorator';
import { RoleEnum } from '../auth/interface/auth.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';
@Role(RoleEnum.Dosen)
@ApiBearerAuth('access-token')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ResponseFormat({ entity: 'room', actionType: 'create' })
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @ResponseFormat({ entity: 'room', actionType: 'read' })
  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @ResponseFormat({ entity: 'room', actionType: 'read' })
  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.roomService.findOne(id);
  }

  @ResponseFormat({ entity: 'room', actionType: 'update' })
  @Patch(':id')
  update(@Param('id') id: any, @Body() updateSilabusDto: UpdateRoomDto) {
    return this.roomService.update(id, updateSilabusDto);
  }

  @ResponseFormat({ entity: 'room', actionType: 'delete' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}
