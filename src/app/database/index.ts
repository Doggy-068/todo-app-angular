import { TodoModel, TodoModelType } from '../model/todo.model'

export class AppDatabase {
  private static instance: AppDatabase | null = null

  private constructor() { }

  public static getInstance(): AppDatabase {
    if (AppDatabase.instance === null) {
      AppDatabase.instance = new AppDatabase()
    }
    return AppDatabase.instance
  }

  private id: number = 1

  private todos: TodoModel[] = []

  public getTodos(): TodoModel[] {
    try {
      return this.todos.map(item => new TodoModel(item.id, item.title, item.type, item.startTime, item.content))
    } catch {
      return []
    }
  }

  public insertTodo(todo: { title: string, type: TodoModelType, startTime: string, content: string }): boolean {
    try {
      this.todos.push(new TodoModel(
        this.id++,
        todo.title,
        todo.type,
        todo.startTime,
        todo.content
      ))
      return true
    } catch {
      return false
    }
  }

  public findTodoById(id: number): TodoModel | null {
    try {
      const todo = this.todos.find(item => item.id === id)
      if (todo !== undefined) return new TodoModel(todo.id, todo.title, todo.type, todo.startTime, todo.content)
      throw new Error()
    } catch {
      return null
    }
  }

  public modifyTodoById(id: number, patch: Partial<{ title: string, type: TodoModelType, startTime: string, content: string }>) {
    try {
      const todo = this.todos.find(item => item.id === id)
      if (todo === undefined) throw new Error()
      patch.title !== undefined && (todo.title = patch.title)
      patch.type !== undefined && (todo.type = patch.type)
      patch.startTime !== undefined && (todo.startTime = patch.startTime)
      patch.content !== undefined && (todo.content = patch.content)
      return true
    } catch {
      return false
    }
  }

  public deleteTodoById(id: number): boolean {
    try {
      const idx = this.todos.findIndex(item => item.id === id)
      if (idx !== -1) this.todos.splice(idx, 1)
      return true
    } catch {
      return false
    }
  }
}
