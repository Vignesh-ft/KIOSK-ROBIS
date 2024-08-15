import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './login/create-user/create-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Industry40Component } from './Verticals/industry4-0/industry4-0.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'LOGIN | KIOSK',
    component:LoginComponent,
  },
  {
    path:'createUser',
    title:'CREATE USER | KIOSK',
    component: CreateUserComponent
  },
  {
    path:'home',
    title: 'HOME | KIOSK',
    component: HomePageComponent
  },
  {
    path:'industry4-0',
    title:'Industry 4.0| KIOSK',
    component: Industry40Component
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration:'enabled',
  anchorScrolling: 'enabled'

}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
