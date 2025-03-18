import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { PeopleService } from './people.service';
import { FindAllUserDto } from './dto/find-all-people.dto';
import { UpdateUserDto } from './dto/update-people.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@ApiBearerAuth('access-token')
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @ResponseFormat({ actionType: 'read', entity: 'people' })
  @Get()
  findAll(@Query() findAllUserDto: FindAllUserDto) {
    return this.peopleService.findAll(findAllUserDto);
  }

  @ResponseFormat({ actionType: 'read', entity: 'people' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleService.findOneWithRelations(id);
  }

  @ResponseFormat({ actionType: 'update', entity: 'people' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.peopleService.update(id, updateUserDto);
  }

  @ResponseFormat({ actionType: 'delete', entity: 'people' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleService.remove(id);
  }
}
