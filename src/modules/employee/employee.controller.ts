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
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { FindAllEmployeeDto } from './dto/find-all-employee.dto';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ResponseFormat({ actionType: 'create', entity: 'employee' })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @ResponseFormat({ actionType: 'read', entity: 'employee' })
  @Get()
  findAll(@Query() query: FindAllEmployeeDto) {
    return this.employeeService.findAll(query);
  }

  @ResponseFormat({ actionType: 'create', entity: 'employee' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @ResponseFormat({ actionType: 'update', entity: 'employee' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @ResponseFormat({ actionType: 'delete', entity: 'employee' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }
}
