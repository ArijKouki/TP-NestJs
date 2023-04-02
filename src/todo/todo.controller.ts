import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param, ParseIntPipe, Patch,
  Post,
  Put, Query
} from "@nestjs/common";
import { Todo } from './entities/todo.entity';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { TodoEntity2 } from "./entities/todo2.entity";
import { SearchDTO } from "./dto/search.dto";
import { PaginationDto } from "./dto/pagination.dto";

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  /*@Get()
  getToDos(): Todo[] {
    return this.todoService.getTodos();
  }*/

  @Get()
  async getTodos2(
    @Query() params: PaginationDto
  ): Promise<TodoEntity2[]> {
    console.log(params);
    const { page, limit } = params;
    const skip = (page - 1) * limit;
    return await this.todoService.getTodos2(skip, limit);
  }

  @Get('search')
  async getTodos3(@Query() conditions: SearchDTO): Promise<TodoEntity2[]> {
    console.log(conditions);
    return await this.todoService.getTodos3(conditions);
  }

  /*@Get(':id')
  getToDo(@Param('id') id) {
    return this.todoService.getToDo(id);
  }*/

  @Get(':id')
  async getToDo2(@Param('id', ParseIntPipe) id: number): Promise<TodoEntity2> {
    return await this.todoService.getToDo2(id);
  }

  @Get('/count/:status')
  async countStatus(@Param('status') status){
    return await this.todoService.countStatus(status);
  }

  /*@Post()
  addToDo(@Body() todo: AddTodoDto) {
    return this.todoService.addTodo(todo);
  }*/

  @Post()
  async addToDo2(@Body() todo: AddTodoDto) {
    return await this.todoService.addTodo2(todo);
  }

  /*@Delete(':id')
  deleteToDo(@Param('id') id) {
    return this.todoService.deleteToDo(id);
  }*/

  @Delete(':id')
  async deleteToDo(@Param('id') id) {
    return this.todoService.deleteToDo2(id);
  }

  @Patch(':id')
  async restoreToDo(@Param('id') id) {
    return await this.todoService.restoreToDo(id);
  }

  /*@Put(':id')
  updateToDo(@Param('id') id, @Body() newTodo: UpdateTodoDto) {
    return this.todoService.updateToDo(id, newTodo);
  }*/

  @Put(':id')
  async updateToDo2(@Param('id') id, @Body() newTodo: UpdateTodoDto) {
    return await this.todoService.updateToDo2(id, newTodo);
  }
}
