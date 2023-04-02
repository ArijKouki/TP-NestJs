import { BaseEntity, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class Timestamps extends BaseEntity {
  @CreateDateColumn({ type: 'timestamp' })
  readonly createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
