import { Injectable } from '@nestjs/common';

export type TodoDTO = {
  title: string;
  status: boolean;
  userId: string;
};

@Injectable()
export class TodoService {
  private readonly todos: TodoDTO[] = [];

  findAll(): TodoDTO[] {
    return this.todos;
  }

  create(todo: TodoDTO) {
    this.todos.push(todo);
    let returnTodo: TodoDTO;
    for (let index = 0; index < this.todos.length; index++) {
      if (
        this.todos[index].userId == todo.userId &&
        this.todos[index].title == todo.title
      ) {
        returnTodo = this.todos[index];
      }
    }
    return returnTodo;
  }
}
