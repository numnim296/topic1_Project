import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'detail',
    component: DetailComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
