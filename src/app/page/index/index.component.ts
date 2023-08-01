import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatDividerModule } from '@angular/material/divider'
import { Router } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { debounce } from 'lodash'

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
export class PageIndexComponent implements AfterViewInit, OnDestroy {
  @ViewChild('toolbar') toolbar!: MatToolbar

  @ViewChild('content') content!: ElementRef<HTMLDivElement>

  constructor(public router: Router) { }

  resize = () => {
    const toolbarHeight = this.toolbar._elementRef.nativeElement.clientHeight
    this.content.nativeElement.style.height = `calc(100vh - ${toolbarHeight}px)`
  }

  resizeCallback = debounce(this.resize, 100)

  ngAfterViewInit(): void {
    this.resize()
    window.addEventListener('resize', this.resizeCallback)
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeCallback)
  }

  sidenavOpened = false

  navigations: { path: string, i18n: string, icon: string }[] = [
    { path: '/index/home', i18n: 'index.home', icon: 'home' },
    { path: '/index/daily', i18n: 'index.daily', icon: 'format_list_numbered_icon' },
    { path: '/index/three', i18n: 'index.three', icon: 'view_in_ar_icon' },
    { path: '/index/map', i18n: 'index.map', icon: 'map' },
    { path: '/index/setting', i18n: 'index.setting', icon: 'settings' }
  ]

  onToolbarIconClick = () => this.sidenavOpened = true

  onListItemClick = (path: string) => this.router.navigateByUrl(path, { replaceUrl: true })
}
