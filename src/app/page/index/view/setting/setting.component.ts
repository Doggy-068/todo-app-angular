import { Component } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'view-setting',
  imports: [
    TranslateModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class ViewSettingComponent {
  constructor(private translateService: TranslateService) { }

  onLocaleItemClick = (val: string) => this.translateService.use(val)

  onThemeItemClick = (val: string) => (document.getElementById('style-manager-theme') as HTMLLinkElement).href = val
}
