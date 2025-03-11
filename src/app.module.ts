import { Module } from '@nestjs/common';
import { readdirSync } from 'fs';
import { join } from 'path';
import dataSource from './common/config/connection.config';

const modules = readdirSync(join(__dirname, 'modules'))
    .map(folder => {
      try {
        return require(`./modules/${folder}/${folder}.module`).default;
      } catch (e) {
        console.warn(`Module ${folder} tidak ditemukan atau error:`, e);
        return null;
      }
    })
    .filter(m => m !== null);

  @Module({
    imports: [
      ...modules,
      TypeOrmModule.forRoot({
        dataSource,
      }),
    ],
  })
  export class AppModule {}
