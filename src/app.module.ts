import { Module } from '@nestjs/common';
import dataSource from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SilabusModule } from './modules/silabus/silabus.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),
    SilabusModule,
    UserModule,
    AuthModule,
    CommonModule,
  ],
})
export class AppModule {}
