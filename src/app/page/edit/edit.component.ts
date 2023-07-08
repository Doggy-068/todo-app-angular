import { Component, inject } from '@angular/core'
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
import { EditService } from './edit.service'
import { ActivatedRoute } from '@angular/router'

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
  providers: [EditService],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class PageEditComponent {
  route: ActivatedRoute = inject(ActivatedRoute)

  constructor(private location: Location, private editService: EditService) {
    const id = Number(this.route.snapshot.queryParams['id'])
    const data = this.editService.fetchData(id)
    if (data !== null) {
      this.titleControl.setValue(data.title)
      this.typeControl.setValue(data.type)
      this.startTimeControl.setValue(new Date(data.startTime))
      this.contentControl.setValue(data.content)
    }
  }

  onBackClick = () => this.location.back()

  typeOption = TodoModelType

  titleControl = new FormControl<string>('')

  typeControl = new FormControl<TodoModelType>(TodoModelType.GREEN)

  startTimeControl = new FormControl<Date>(new Date())

  contentControl = new FormControl<string>('')

  onSaveClick = () => {
    const item = {
      title: this.titleControl.getRawValue() || '',
      type: this.typeControl.getRawValue() || TodoModelType.GREEN,
      startTime: this.startTimeControl.getRawValue()?.toJSON() || '',
      content: this.contentControl.getRawValue() || ''
    }
    const id = Number(this.route.snapshot.queryParams['id'])
    if (this.editService.fetchData(id)) {
      if (this.editService.updateData(id, item)) {
        this.location.back()
      }
    } else {
      if (this.editService.insertData(item)) {
        this.location.back()
      }
    }
  }
}
