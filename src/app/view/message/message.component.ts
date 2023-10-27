import { NgFor, NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { DevUIModule } from 'ng-devui'

@Component({
  standalone: true,
  imports: [DevUIModule, NgFor, NgIf],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  constructor(private sanitizer: DomSanitizer) { }

  list: {
    key: string
    avatar: string
    unread: number
    name: string
    message: string
    isOtherRead: boolean
    date: string
  }[] = [
      { key: '1', avatar: '', unread: 0, name: 'xxx', message: 'xxxxxx', isOtherRead: true, date: '15:07' },
      { key: '2', avatar: '', unread: 1, name: 'xxxxx', message: 'xxxxxxxxx', isOtherRead: false, date: '09:38' },
    ]

  currentItemKey = this.list[0].key || ''

  handleListItemClick = (key: string) => {
    this.currentItemKey = key
  }

  chatList = [
    { isSend: false, content: this.sanitizer.bypassSecurityTrustHtml('<span style="color: #7693f5">Hello!</span>') },
    { isSend: true, content: this.sanitizer.bypassSecurityTrustHtml('<span style="color: #909399">Okk.</span>') }
  ]

}
