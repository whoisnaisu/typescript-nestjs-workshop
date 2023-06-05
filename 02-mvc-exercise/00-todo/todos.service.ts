export type Todo = {
    id: string;
    title: string;
    isComplete: boolean;
    userId: string
  };

export class TodosService {
    private readonly Todo: Todo[] = [];

    findAll() {
        return this.Todo
    }

    create(todo: Todo): Todo[] {
        this.Todo.push(todo)
        return this.Todo.filter(({ id }) => id === todo.id);
    }
}
