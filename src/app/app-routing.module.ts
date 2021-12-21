import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSigninComponent } from './auth-signin/auth-signin.component'
import { AuthGuard } from './auth.guard'
import { NotfoundComponent } from './notfound/notfound.component'
import { VaxDetailComponent } from './vax-detail/vax-detail.component'
import { VaxListComponent } from './vax-list/vax-list.component'

const routes: Routes = [
  // {
  //   path: '',
  //   component: VaxListComponent,
  // },
  // {
  //   path: 'item/:id',
  //   component: VaxDetailComponent
  // }
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', canActivate: [ AuthGuard ], component: VaxListComponent },
  { path: 'login', component: AuthSigninComponent },
  // { path: 'register', component: RegisterComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
  {
    path: 'item/:id',
    component: VaxDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
