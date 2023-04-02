import { TodoStatusEnum } from "./TodoStatusEnum";

export class Todo{
  id: string;

  name: string;

  description:string;

  createdAt: string;
  status: TodoStatusEnum;

  constructor(
    id:string,
    name: string,
    description: string,
    status: TodoStatusEnum = TodoStatusEnum.waiting
  ) {
    this.id=id;
    this.name = name;
    this.description = description;
    this.createdAt= new Date().toLocaleDateString('fr-FR',
      {year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',});
    this.status = status;
  }

}

