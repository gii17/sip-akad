import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SilabusService } from './silabus.service';
import { CreateSilabusDto } from './dto/create-silabus.dto';
import { UpdateSilabusDto } from './dto/update-silabus.dto';

@Controller('silabus')
export class SilabusController {
  constructor(private readonly silabusService: SilabusService) {}

  @Post()
  create(@Body() createSilabusDto: CreateSilabusDto) {
    return this.silabusService.create(createSilabusDto);
  }

  @Get()
  findAll() {
    return this.silabusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.silabusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSilabusDto: UpdateSilabusDto) {
    return this.silabusService.update(+id, updateSilabusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.silabusService.remove(+id);
  }
}
