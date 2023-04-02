import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./entities/todo.entity";
import { AddTodoDto } from "./dto/add-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { TodoEntity2 } from "./entities/todo2.entity";
import { SearchDTO } from "./dto/search.dto";

@Injectable()
export class TodoService {
  constructor(@Inject('UUID') private readonly uuid: () => string,
              @InjectRepository(TodoEntity2) private todoRepository: Repository<TodoEntity2>
              ) {
  }


  todos: Todo[]=[];
  getTodos(){
    return this.todos;
  }

  async getTodos2(skip: number, limit: number): Promise<TodoEntity2[]> {
    const take = limit;
    return await this.todoRepository.find({ skip, take });
  }

  async getTodos3(conditions?: SearchDTO): Promise<TodoEntity2[]> {
    const { status, critere } = conditions;
    if (status || critere) {
      const nameQuery = Like(`%${critere}%`);
      const descriptionQuery = Like(`%${critere}%`);
      const statusQuery = status;
      return await this.todoRepository.find({
        where: [
          { name: nameQuery, status: statusQuery },
          { description: descriptionQuery, status: statusQuery },
        ],
      });
    } else {
      return await this.todoRepository.find();
    }
}


  getToDo(id: string) {
    console.log(id);
    const todo = this.todos.find((todo: Todo) => todo.id == id);
    console.log(todo);
    if (todo) return todo;
    else throw new NotFoundException(`ToDo item with id ${id} not found`);
  }

  async getToDo2(id: number): Promise<TodoEntity2> {
    const todo = await this.todoRepository.findOneById(id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
  }


  addTodo(todo: AddTodoDto) {
    const newTodo = new Todo(this.uuid(),todo.name, todo.description);
    this.todos.push(newTodo);
    console.log('ToDo item added');
    return newTodo;
  }

  async addTodo2(todo: AddTodoDto) {
    return await this.todoRepository.save(todo);
  }

  deleteToDo(id: string) {
    const todoIndex = this.todos.findIndex((todo: Todo) => todo.id == id);
    console.log(todoIndex);
    if(todoIndex) {
      this.todos.splice(todoIndex,1);
      return 'ToDo item deleted';
    }
    else throw new NotFoundException(`ToDo item with id ${id} not found`);
  }

  async deleteToDo2(id: number){
    return this.todoRepository.softDelete(id)
  }

  async restoreToDo(id: number) {
    return await this.todoRepository.restore(id);
  }

  updateToDo(id: string, newTodo: UpdateTodoDto) {
    console.log(id, newTodo);
    const todo: Todo = this.getToDo(id);
    todo.name = newTodo.name ? newTodo.name : todo.name;
    todo.description = newTodo.description ? newTodo.description : todo.description;
    todo.status = newTodo.status ? newTodo.status : todo.status;
    console.log('ToDo item updated');
    return todo;
  }

  async updateToDo2(id: number, newTodo: UpdateTodoDto){
    console.log(newTodo);
    return await this.todoRepository.update(id, { ...newTodo })
  }

  async countStatus(status: any) {
    return await this.todoRepository.count({ where: { status: status } })
  }
}
