import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PeopleRepository } from './people.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';

@Module({
  imports     : [TypeOrmModule.forFeature([People])],
  providers   : [PeopleService, PeopleRepository],
  controllers : [PeopleController],
  exports     : [PeopleRepository],
})
export class PeopleModule {}
