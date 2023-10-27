import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MessageComponent } from './view/message/message.component'

const routes: Routes = [
  { path: 'message', component: MessageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
