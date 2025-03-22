import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingService } from './building.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { Role } from 'src/common/decorator/role.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RoleEnum } from '../auth/interface/auth.interface';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@Role(RoleEnum.Dosen)
@ApiBearerAuth('access-token')
@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @ResponseFormat({ entity: 'building', actionType: 'create' })
  @Post()
  create(@Body() createBuildingDto: CreateBuildingDto) {
    return this.buildingService.create(createBuildingDto);
  }

  @ResponseFormat({ entity: 'building', actionType: 'read' })
  @Get()
  findAll() {
    return this.buildingService.findAll();
  }

  @ResponseFormat({ entity: 'building', actionType: 'read' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingService.findOne(+id);
  }

  @ResponseFormat({ entity: 'building', actionType: 'update' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingDto: UpdateBuildingDto) {
    return this.buildingService.update(+id, updateBuildingDto);
  }

  @ResponseFormat({ entity: 'building', actionType: 'delete' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingService.remove(+id);
  }
}
