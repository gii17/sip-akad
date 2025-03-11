import { Module } from '@nestjs/common';
import dataSource from './common/config/connection.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SilabusModule } from './modules/silabus/silabus.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),
    SilabusModule,
    UserModule,
  ],
})
export class AppModule {}
