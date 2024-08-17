import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './login/create-user/create-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Industry40Component } from './Verticals/industry4-0/industry4-0.component';
import { ProductTemplateComponent } from './Verticals/product-template/product-template.component';
import { ImmRobotAndAccessoriesComponent } from './Verticals/imm-robot-and-accessories/imm-robot-and-accessories.component';
import { RemanufracturingServicesComponent } from './Verticals/remanufracturing-services/remanufracturing-services.component';
import { AssemblyAndTestingSolutionsComponent } from './Verticals/assembly-and-testing-solutions/assembly-and-testing-solutions.component';
import { MaterialHandlingComponent } from './Verticals/material-handling/material-handling.component';
import { JoiningSolutionsComponent } from './Verticals/joining-solutions/joining-solutions.component';
import { TermsAndConditionsComponent } from './login/terms-and-conditions/terms-and-conditions.component';
import { CorporateVideoComponent } from './home-page/corporate-video/corporate-video.component';

const routes: Routes = [
  {
    path: '',
    title: 'Login | ROBIS',
    component:LoginComponent,
  },
  {
    path:'createUser',
    title:'Create | ROBIS',
    component: CreateUserComponent
  },
  {
    path:'home',
    title: 'Home | ROBIS',
    component: HomePageComponent
  },
  {
    path:'industry4-0',
    title:'Industry 4.0 | ROBIS',
    component: Industry40Component
  },
  {
    path:"testing",
    component:ProductTemplateComponent
  },
  {
    path:'machine-rmfg',
    title:'Remanufracturing | ROBIS',
    component: RemanufracturingServicesComponent
  },
  {
    path:'rob-auto',
    title:'Robotics | ROBIS',
    component: ImmRobotAndAccessoriesComponent
  },
  {
    path:'qa-testing',
    title:'Robotics | ROBIS',
    component: AssemblyAndTestingSolutionsComponent
  },
  {
    path:'mat-handlng',
    title:'Material Handling | ROBIS',
    component: MaterialHandlingComponent
  },
  {
    path:'join-sol',
    title:'Joining Solutions | ROBIS',
    component: JoiningSolutionsComponent
  },
  {
    path:'create/terms-and-condition/show',
    title:'T&C',
    component: TermsAndConditionsComponent
  },
  {
    path:"know-about-us",
    title: 'Know | ROBIS',
    component: CorporateVideoComponent
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
