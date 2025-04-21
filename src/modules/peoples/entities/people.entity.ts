import { AbstractEntity } from 'src/common/database/abstract.entity';
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
    nullable: false,
  })
  sex: number;

  @Column({
    type: 'date',
  })
  dob: Date;

  @Column({
    type: 'text',
    nullable: false,
  })
  location: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  religion: number;
}
