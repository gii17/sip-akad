import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class UserEntity extends AbstractEntity<UserEntity> {
  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  lastToken: string;
}
