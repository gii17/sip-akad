import {
  UpdateDateColumn,
  PrimaryColumn,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = Math.random().toString(36).substring(2, 17);
  }
}