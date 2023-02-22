import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Todo } from "./entities/todo.entity";
import { AddTodoDto } from "./dto/add-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Injectable()
export class TodoService {
  constructor(@Inject('UUID') private readonly uuid: () => string) {
    console.log(this.uuid());
  }
  todos: Todo[]=[];
  getTodos(){
    return this.todos;
  }

  getToDo(id: string) {
    console.log(id);
    const todo = this.todos.find((todo: Todo) => todo.id == id);
    console.log(todo);
    if (todo) return todo;
    else throw new NotFoundException(`ToDo item with id ${id} not found`);
  }

  addTodo(todo: AddTodoDto) {
    const newTodo = new Todo(this.uuid(), todo.name, todo.description);
    this.todos.push(newTodo);
    console.log('ToDo item added');
    return newTodo;
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

  updateToDo(id: string, newTodo: UpdateTodoDto) {
    console.log(id, newTodo);
    const todo: Todo = this.getToDo(id);
    todo.name = newTodo.name ? newTodo.name : todo.name;
    todo.description = newTodo.description ? newTodo.description : todo.description;
    todo.status = newTodo.status ? newTodo.status : todo.status;
    console.log('ToDo item updated');
    return todo;
  }
}
