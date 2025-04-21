import { AbstractEntity } from 'src/common/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'employees' })
export class Employee extends AbstractEntity<Employee> {
  @Column({ type: 'integer', nullable: false })
  nip: number;

  @Column({ type: 'datetime', nullable: false })
  hire_date: Date;

  @Column({ type: 'integer', nullable: false })
  sallary: number;

  @Column({ type: 'smallint', nullable: false })
  status: number;
}
