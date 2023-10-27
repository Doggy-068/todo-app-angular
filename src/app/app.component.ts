import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) { }

  menus = [
    { label: '消息', path: '/message' },
    { label: '视频会议', path: '' },
    { label: '日历', path: '' },
    { label: '云文档', path: '' },
    { label: '多维表格', path: '' },
    { label: '工作台', path: '' },
    { label: '通讯录', path: '' }
  ]

  menusOptional = [
    { label: '任务', path: '' },
    { label: '汇报', path: '' }
  ]

  onMenuItemClick = (path: string) => {
    this.router.navigateByUrl(path)
  }

  onMenuOptionalCloseClick = (evt: Event, idx: number) => {
    this.menusOptional.splice(idx, 1)
    evt.stopPropagation()
  }

}
