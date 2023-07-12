import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { Router } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'page-index',
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class PageIndexComponent {
  constructor(public router: Router) { }

  sidenavOpened = false

  navigations: { path: string, i18n: string, icon: string }[] = [
    { path: '/index/home', i18n: 'index.home', icon: 'home' },
    { path: '/index/daily', i18n: 'index.daily', icon: 'format_list_numbered_icon' },
    { path: '/index/setting', i18n: 'index.setting', icon: 'settings' }
  ]

  onToolbarIconClick = () => this.sidenavOpened = true

  onListItemClick = (path: string) => this.router.navigateByUrl(path, { replaceUrl: true })
}
