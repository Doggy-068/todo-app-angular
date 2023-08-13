import { Component } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  providers: [AppService],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private appService: AppService) {
    this.appService.setLocale(this.appService.getLocale())
  }
}
