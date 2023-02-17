export class Todo{
  id: string;
  name: string;
  description:string;
  dateCreation: string;
  status: TodoStatusEnum;

  constructor(
    id:string,
    name: string,
    description: string,
    status: TodoStatusEnum = TodoStatusEnum.waiting
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dateCreation= new Date().toLocaleDateString('fr-FR',
      {year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',});
    this.status = status;
  }

}

export enum TodoStatusEnum{
  'actif' = 'en cours',
  'waiting' = 'en attente',
  'done' = 'finalisé'
}