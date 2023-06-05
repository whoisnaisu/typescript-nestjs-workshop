import { TodosService } from "./todos.service";

export type createTodoDTO = {
    id: string
    title: string
    isComplete: string
    userId: string
}

export class TodosController {
    constructor(todoService: TodosService) {}

    findAll() {
        return this.todoService.findAll()
    }

    create(createTodoDTO: createTodoDTO) {
        const todo = createTodoDTO

        const newTodo = this.todoService.create(todo)

        return newTodo
    }
}
