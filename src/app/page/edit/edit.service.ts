import { Injectable } from '@angular/core'
import { AppDatabase } from '../../database'
import { TodoModelType } from '../../model/todo.model'

@Injectable()
export class EditService {
  fetchData(id: number) {
    return AppDatabase.getInstance().findTodoById(id)
  }

  insertData(item: { title: string, type: TodoModelType, startTime: string, content: string }) {
    return AppDatabase.getInstance().insertTodo(item)
  }

  updateData(id: number, item: { title: string, type: TodoModelType, startTime: string, content: string }) {
    return AppDatabase.getInstance().modifyTodoById(id, item)
  }
}
