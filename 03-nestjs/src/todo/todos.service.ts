import { Injectable } from '@nestjs/common';

export type Todo = {
  id: string;
  title: string;
  isComplete: boolean;
  userId: string;
};

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = [];

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: Todo): Todo[] {
    this.todos.push(todo);
    return this.todos.filter(({ id }) => id === todo.id);
  }
}
