import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OktaAuthGuard } from './app.guard';
import { CallbackComponent } from './callback.component';
import { ProfileComponent } from './profile/profile.component';
import { ProtectedComponent } from './protected.component';

const routes: Routes = [
  // {
  //   path: 'callback',
  //   component: CallbackComponent
  // },
  {
    path: 'login/callback',
    component: CallbackComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
