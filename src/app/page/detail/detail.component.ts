import { Component, inject } from '@angular/core'
import { Location, CommonModule } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'
import { TodoModel } from '../../model/todo.model'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core'
import { DetailService } from './detail.service'

@Component({
  standalone: true,
  selector: 'page-detail',
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DetailService],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class PageDetailComponent {
  route = inject(ActivatedRoute)

  constructor(private location: Location, private router: Router, private detailService: DetailService) {
    const id = Number(this.route.snapshot.queryParams['id'])
    this.todo = this.detailService.fetchData(id)
  }

  todo: null | TodoModel = null

  onBackClick = () => this.location.back()

  onDeleteButtonClick = () => {
    const id = Number(this.route.snapshot.queryParams['id'])
    if (this.detailService.deteleData(id)) {
      this.location.back()
    }
  }

  onEditButtonClick = () => {
    const id = this.route.snapshot.queryParams['id']
    this.router.navigateByUrl(`/edit?id=${id}`)
  }
}
