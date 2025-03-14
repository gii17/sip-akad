import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FindAllUserDto } from './dto/find-all-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@ApiBearerAuth('access-token')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ResponseFormat({ actionType: 'read', entity: 'user' })
  @Get()
  findAll(@Query() findAllUserDto: FindAllUserDto) {
    return this.userService.findAll(findAllUserDto);
  }

  @ResponseFormat({ actionType: 'read', entity: 'user' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ResponseFormat({ actionType: 'update', entity: 'user' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @ResponseFormat({ actionType: 'delete', entity: 'user' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
