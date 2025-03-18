import {
  UpdateDateColumn,
  PrimaryColumn,
  BeforeInsert,
  CreateDateColumn,
} from 'typeorm';

export abstract class AbstractEntity<T> {
  @PrimaryColumn()
  id: string;

  constructor(partial: Partial<T>) {
    Object.assign(this, partial);
  }

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = Math.random().toString(36).substring(2, 17);
  }
}
