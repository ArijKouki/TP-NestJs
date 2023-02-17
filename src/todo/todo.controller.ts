import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { Todo } from "./entities/todo.entity";
import { AddTodoDto } from "./dto/add-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {

  constructor(private todoService:TodoService) {}

  @Get()
  getToDos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getToDo(
    @Param('id') id
  ){
    return this.todoService.getToDo(id);
  }

  @Post()
  addToDo(
    @Body() todo: AddTodoDto
  ) {
    return this.todoService.addTodo(todo);
  }

  @Delete(':id')
  deleteToDo(
    @Param('id') id
  ) {
    return this.todoService.deleteToDo(id);
  }

  @Put(':id')
  updateToDo(
    @Param('id') id,
    @Body() newTodo: UpdateTodoDto
  ) {
    return this.todoService.updateToDo(id, newTodo);
  }
}
