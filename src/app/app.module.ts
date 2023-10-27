import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DevUIModule } from 'ng-devui'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DevUIModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
