import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoModel } from '../../../../model/todo.model'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { Router } from '@angular/router'

@Component({
  standalone: true,
  selector: 'view-home',
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class ViewHomeComponent {
  constructor(private router: Router) { }

  list: TodoModel[] = [
    new TodoModel(),
    new TodoModel()
  ]

  onListItemClick = () => {
    this.router.navigateByUrl('/detail')
  }
}
