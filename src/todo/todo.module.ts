import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoEntity2 } from "./entities/todo2.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity2])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
