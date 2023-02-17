import { TodoStatusEnum } from "../entities/todo.entity";

export class UpdateTodoDto{
  name: string;
  description: string;
  status: TodoStatusEnum;
}