import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageIndexComponent } from './page/index/index.component'
import { ViewHomeComponent } from './page/index/view/home/home.component'
import { ViewSettingComponent } from './page/index/view/setting/setting.component'
import { PageDetailComponent } from './page/detail/detail.component'
import { PageEditComponent } from './page/edit/edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/index/home', pathMatch: 'full' },
  {
    path: 'index',
    component: PageIndexComponent,
    children: [
      { path: 'home', component: ViewHomeComponent },
      { path: 'setting', component: ViewSettingComponent }
    ]
  },
  {
    path: 'detail',
    component: PageDetailComponent
  },
  {
    path: 'edit',
    component: PageEditComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
