import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SummariesService } from './summaries.service';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { FindAllSummaryDto } from './dto/find-all-summary.dto';
import { ResponseFormat } from 'src/common/decorator/response-format.decorator';

@Controller('summaries')
export class SummariesController {
  constructor(private readonly summariesService: SummariesService) {}

  @ResponseFormat({ actionType: 'create', entity: 'summary' })
  @Post()
  create(@Body() createSummaryDto: CreateSummaryDto) {
    return this.summariesService.create(createSummaryDto);
  }

  @ResponseFormat({ actionType: 'read', entity: 'summary' })
  @Get()
  findAll(findAllSummaryDto: FindAllSummaryDto) {
    return this.summariesService.findAll(findAllSummaryDto);
  }

  @ResponseFormat({ actionType: 'read', entity: 'summary' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.summariesService.findOne(id);
  }

  @Patch(':id')
  @ResponseFormat({ actionType: 'update', entity: 'summary' })
  update(@Param('id') id: string, @Body() updateSummaryDto: UpdateSummaryDto) {
    return this.summariesService.update(id, updateSummaryDto);
  }

  @Delete(':id')
  @ResponseFormat({ actionType: 'delete', entity: 'summary' })
  remove(@Param('id') id: string) {
    return this.summariesService.remove(id);
  }
}
