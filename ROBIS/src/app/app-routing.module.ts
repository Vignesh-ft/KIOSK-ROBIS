import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './login/create-user/create-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Industry40Component } from './Verticals/industry4-0/industry4-0.component';
import { RAssetComponent } from './Verticals/industry4-0/Products/r-asset/r-asset.component';
import { ProductTemplateComponent } from './Verticals/product-template/product-template.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login | KIOSK',
    component:LoginComponent,
  },
  {
    path:'createUser',
    title:'Create | KIOSK',
    component: CreateUserComponent
  },
  {
    path:'',
    title: 'Home | KIOSK',
    component: HomePageComponent
  },
  {
    path:'industry4-0',
    title:'Industry 4.0 | KIOSK',
    component: Industry40Component
  },
  {
    path:'industry4-0/r-asset',
    title: 'R-Asset | Industry4.0',
    component: RAssetComponent
  },
  {
    path:"testing",
    component:ProductTemplateComponent
  }
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
