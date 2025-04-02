import { Injectable } from '@nestjs/common';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { SummaryRepository } from './summary.repository';
import { FindAllSummaryDto } from './dto/find-all-summary.dto';
import { SUMMARIES_MODEL_CODE } from './summaries.constant';

@Injectable()
export class SummariesService {
  constructor(private readonly summaryRepository: SummaryRepository) {}

  create(createSummaryDto: CreateSummaryDto) {
    return this.summaryRepository.create({
      ...createSummaryDto,
      modelCode: SUMMARIES_MODEL_CODE,
    });
  }

  findAll(findAllSummaryDto: FindAllSummaryDto) {
    return this.summaryRepository.findAll(findAllSummaryDto);
  }

  findOne(id: string) {
    return this.summaryRepository.findOne({ id });
  }

  update(id: string, updateSummaryDto: UpdateSummaryDto) {
    return this.summaryRepository.findOneAndUpdate({ id }, updateSummaryDto);
  }

  remove(id: string) {
    return this.summaryRepository.findOneAndDelete({ id });
  }
}
