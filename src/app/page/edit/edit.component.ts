import { Component } from '@angular/core'
import { Location } from '@angular/common'
import { ReactiveFormsModule, FormControl } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSelectModule } from '@angular/material/select'
import { TodoModelType } from '../../model/todo.model'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'page-edit',
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class PageEditComponent {
  constructor(private location: Location) { }

  onBackClick = () => this.location.back()

  typeOption = TodoModelType

  titleControl = new FormControl('')

  typeControl = new FormControl(TodoModelType.GREEN)

  startTimeControl = new FormControl(new Date())

  contentControl = new FormControl('')
}
