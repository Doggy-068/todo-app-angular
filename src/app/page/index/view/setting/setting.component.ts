import { Component } from '@angular/core'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { TranslateModule } from '@ngx-translate/core'
import { AppService } from '../../../../app.service'

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
  providers: [AppService],
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class ViewSettingComponent {
  constructor(private appService: AppService) { }

  onLocaleItemClick = (locale: string) => this.appService.setLocale(locale)

  onThemeItemClick = (val: string) => {
    fetch(val).then(() => {
      (document.getElementById('style-manager-theme') as HTMLLinkElement).href = val
    })
  }
}
