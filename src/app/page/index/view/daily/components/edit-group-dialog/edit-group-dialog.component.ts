import { Component, Inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormControl } from '@angular/forms'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'add-group-dialog',
  imports: [
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './edit-group-dialog.component.html'
})
export class EditGroupDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<EditGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  nameControl = new FormControl<string>('')

  items: FormControl[] = [new FormControl<string>('')]

  onAddButtonClick = () => {
    this.items.push(new FormControl<string>(''))
  }

  onRemoveButtonClick = (index: number) => {
    this.items.splice(index, 1)
  }

  onSaveButtonClick = () => {
    const value = {
      name: this.nameControl.getRawValue() || '',
      items: this.items.map(e => e.getRawValue() || '')
    }
    this.dialogRef.close(value)
  }
}
