import { DataSource } from 'typeorm';
import { join } from 'path';

const dataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'sip_akad',
  synchronize: true,
  entities: [join(__dirname, '../modules/**/entities/*.entity{.ts,.js}')],
  relationLoadStrategy: 'query',
  migrations: [join(__dirname, '../modules/**/migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations',
});

export default dataSource;
