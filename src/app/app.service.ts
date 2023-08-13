import { Injectable } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Injectable()
export class AppService {
  constructor(private translateService: TranslateService) { }

  private static LOCALE_KEY = 'LOCALE_KEY'

  setLocale(locale: string) {
    this.translateService.use(locale)
    localStorage.setItem(AppService.LOCALE_KEY, locale)
  }

  getLocale() {
    return localStorage.getItem(AppService.LOCALE_KEY) || 'en'
  }
}
