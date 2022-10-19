import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyRouteComponent } from './daily-route/daily-route.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'dailytask',
    component: DailyRouteComponent,

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
