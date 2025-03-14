import { AbstractEntity } from 'src/common/database/abstract.entity';
import { TRole } from 'src/modules/auth/interface/auth.interface';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class User extends AbstractEntity<User> {
  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: null,
  })
  lastToken: string | null;

  @Column({
    type: 'enum',
    enum: ['mahasiswa', 'dosen', 'akademik'],
    default: 'mahasiswa',
  })
  role: TRole;
}
