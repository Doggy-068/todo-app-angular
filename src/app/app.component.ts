import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menus = [
    { label: '消息' },
    { label: '视频会议' },
    { label: '日历' },
    { label: '云文档' },
    { label: '多维表格' },
    { label: '工作台' },
    { label: '通讯录' }
  ]
}
