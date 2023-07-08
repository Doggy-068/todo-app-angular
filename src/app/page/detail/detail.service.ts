import { Injectable } from '@angular/core'
import { AppDatabase } from '../../database'

@Injectable()
export class DetailService {
  fetchData(id: number) {
    return AppDatabase.getInstance().findTodoById(id)
  }

  deteleData(id: number) {
    return AppDatabase.getInstance().deleteTodoById(id)
  }
}
