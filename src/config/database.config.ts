import { DataSource } from 'typeorm';
import { join } from 'path';

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT ? +process.env.DB_HOST! : 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sip_akad',
  synchronize: process.env.NODE_ENV == 'development',
  entities: [join(__dirname, '../modules/**/entities/*.entity{.ts,.js}')],
  relationLoadStrategy: 'query',
  migrations: [join(__dirname, '../modules/**/migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations',
});

export default dataSource;
