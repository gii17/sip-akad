import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SilabusService } from './silabus.service';
import { CreateSilabusDto } from './dto/create-silabus.dto';
import { UpdateSilabusDto } from './dto/update-silabus.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FindAllSilabusDto } from './dto/find-all-silabus.dto';
import { Role } from 'src/common/decorator/role.decorator';
import { RoleEnum } from '../auth/interface/auth.interface';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@Role(RoleEnum.Dosen)
@ApiBearerAuth('access-token')
@Controller('silabus')
export class SilabusController {
  constructor(private readonly silabusService: SilabusService) {}

  @ResponseFormat({ entity: 'silabus', actionType: 'create' })
  @Post()
  create(@Body() createSilabusDto: CreateSilabusDto) {
    return this.silabusService.create(createSilabusDto);
  }

  @ResponseFormat({ entity: 'silabus', actionType: 'read' })
  @Get()
  findAll(@Query() findAllSilabusDto: FindAllSilabusDto) {
    return this.silabusService.findAll(findAllSilabusDto);
  }

  @ResponseFormat({ entity: 'silabus', actionType: 'read' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.silabusService.findOne(id);
  }

  @ResponseFormat({ entity: 'silabus', actionType: 'update' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSilabusDto: UpdateSilabusDto) {
    return this.silabusService.update(id, updateSilabusDto);
  }

  @ResponseFormat({ entity: 'silabus', actionType: 'delete' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.silabusService.remove(id);
  }
}
