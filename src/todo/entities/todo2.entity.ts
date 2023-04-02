import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Timestamps } from "./Timestamps";
import { TodoStatusEnum } from "./TodoStatusEnum";

@Entity("todo")
export class TodoEntity2 extends Timestamps{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

  @Column()
  status: TodoStatusEnum;
}

