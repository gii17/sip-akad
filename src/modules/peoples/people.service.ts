import { ConflictException, Injectable } from '@nestjs/common';
import { PeopleRepository } from './people.repository';
import { FindAllPeopleDto } from './dto/find-all-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly peopleRepository: PeopleRepository) {}

  async findAll(findAllPeopleDto: FindAllPeopleDto) {
    return await this.peopleRepository.findAll(findAllPeopleDto);
  }

  async findOne(id: string) {
    return await this.peopleRepository.findOne({ id });
  }

  async update(id: string, updatePeopleDto: UpdatePeopleDto) {
    try {
      const people = await this.peopleRepository.findOneAndUpdate(
        {
          id,
        },
        updatePeopleDto,
      );
      return people;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY' || error.code === 1062) {
        throw new ConflictException('Data is already Exist');
      }
      throw error;
    }
  }

  async remove(id: string) {
    return await this.peopleRepository.findOneAndDelete({ id });
  }

  async findOneWithRelations(id: string) {
    return this.peopleRepository.findOneWithRelations(id);
  }
}
