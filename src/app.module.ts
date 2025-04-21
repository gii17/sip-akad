import { Module } from '@nestjs/common';
import dataSource from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SilabusModule } from './modules/silabus/silabus.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './modules/room/room.module';
import { BuildingModule } from './modules/building/building.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { ScheduleDetailsModule } from './modules/schedule_details/schedule_details.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { StudentsModule } from './modules/students/students.module';
import { SummariesModule } from './modules/summaries/summaries.module';
import { StudentPeriodicsModule } from './modules/student-periodics/student-periodics.module';
import Joi from 'joi';
import { PeopleModule } from './modules/peoples/people.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().allow('').default(null),
        DB_DATABASE: Joi.string().required(),
        PORT: Joi.number().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES_IN: Joi.string().required(),
        NODE_ENV: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot(dataSource.options),
    SilabusModule,
    UserModule,
    AuthModule,
    CommonModule,
    RoomModule,
    BuildingModule,
    ScheduleModule,
    ScheduleDetailsModule,
    EmployeeModule,
    PeopleModule,
    StudentsModule,
    SummariesModule,
    StudentPeriodicsModule,
  ],
})
export class AppModule {}
