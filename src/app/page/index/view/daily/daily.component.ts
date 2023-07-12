import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { DailyModel } from '../../../../model/daily.model'
import { EditGroupDialogComponent } from './components/edit-group-dialog/edit-group-dialog.component'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'

@Component({
  standalone: true,
  selector: 'view-daily',
  imports: [
    CommonModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class ViewDailyComponent {
  constructor(private dialog: MatDialog) { }

  data: {
    id: number,
    name: string,
    color: string,
    items: DailyModel[]
  }[] = [
      {
        id: 10, name: 'Group-1', color: 'aliceblue', items: [
          new DailyModel(1, 'somgf', false),
          new DailyModel(2, 'soczxczxcmgf', false)
        ]
      },
      {
        id: 11, name: 'Group-2', color: 'orange', items: [
          new DailyModel(3, 'advdsvs', true),
          new DailyModel(4, 'bdbgbfb', false)
        ]
      }
    ]

  onGroupChipClick = (item: typeof this.data[0]) => {
    this.dialog.open(EditGroupDialogComponent, { data: item })
  }

  onAddButtonClick = () => {
    this.dialog.open(EditGroupDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        this.data.push({
          id: (new Date()).getTime(),
          name: result.name,
          color: 'aliceblue',
          items: result.items.map((item: string) => new DailyModel(1, item, false))
        })
      }
    })
  }
}
