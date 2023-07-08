import { Injectable } from '@angular/core'
import { AppDatabase } from '../../../../database'

@Injectable()
export class HomeService {
  fetchData() {
    return AppDatabase.getInstance().getTodos()
  }
}
