import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoModel } from '../../../../model/todo.model'
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'
import { HomeService } from './home.service'

@Component({
  standalone: true,
  selector: 'view-home',
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class ViewHomeComponent {
  constructor(private router: Router, private homeService: HomeService) {
    this.list = this.homeService.fetchData()
  }

  list: TodoModel[] = []

  onListItemClick = (id: number) => {
    this.router.navigateByUrl(`/detail?id=${id}`)
  }

  onAddButtonClick = () => {
    this.router.navigateByUrl('/edit')
  }
}
