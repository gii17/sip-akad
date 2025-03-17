import { AbstractEntity } from 'src/common/database/abstract.entity';
import { TRole } from 'src/modules/auth/interface/auth.interface';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'peoples' })
export class People extends AbstractEntity<People> {
  @Column()
  name: string;

  @Column({ unique: true })
  reference_id: string;

  @Column()
  reference_type: string;

  @Column({
    type: 'integer',
    nullable: false
  })
  sex: integer;

  @Create({
      type: 'date',
  })
  dob: date ;

  @Column({
    type: 'text',
    nullable: false,
  })
  location: string;

  @Column({
    type: 'integer',
    nullable: false
  })
  religion: bigint;
}
