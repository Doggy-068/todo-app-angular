import { Component } from '@angular/core'
import { Location } from '@angular/common'
import { Router } from '@angular/router'
import { TodoModel } from '../../model/todo.model'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'page-detail',
  imports: [
    TranslateModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class PageDetailComponent {
  constructor(private location: Location, private router: Router) { }

  todo = new TodoModel()

  onBackClick = () => this.location.back()

  onEditButtonClick = () => this.router.navigateByUrl('/edit')
}
