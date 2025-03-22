import { Injectable } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { BuildingRepository } from './building.repository';
import { FindAllBuildingDto } from './dto/find-all-building.dto';

@Injectable()
export class BuildingService {

  constructor(private readonly buildingRepository: BuildingRepository){}
  
  create(createBuildingDto: CreateBuildingDto) {
    return this.buildingRepository.create(createBuildingDto);
  }

  findAll(findAllSilabusDto: FindAllBuildingDto) {
    return this.buildingRepository.findAll(findAllSilabusDto);
  }

  findOne(id: string) {
    return this.buildingRepository.findOne({ id });
  }

  update(id: string, updateBuildingDto: UpdateBuildingDto) {
    return this.buildingRepository.findOneAndUpdate({ id }, updateBuildingDto);
  }

  remove(id: string) {
    return this.buildingRepository.findOneAndDelete({ id });
  }
}
