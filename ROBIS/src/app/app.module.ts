import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './login/create-user/create-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { VideoPlayerComponent } from './Components/video-player/video-player.component';
import { ComponentCardComponent } from './Components/component-card/component-card.component';
import { FooterComponent } from './footer/footer.component';
import { Industry40Component } from './Verticals/industry4-0/industry4-0.component';
import { VerticalsTemplateComponent } from './Verticals/verticals-template/verticals-template.component';
import { ProductTemplateComponent } from './Verticals/product-template/product-template.component';
import { VerticalsVideoComponent } from './Components/verticals-video/verticals-video.component';
import { VerticalsCardComponent } from './Components/verticals-card/verticals-card.component';
import { RAssetComponent } from './Verticals/industry4-0/Products/r-asset/r-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    CreateUserComponent,
    NavbarComponent,
    VideoPlayerComponent,
    ComponentCardComponent,
    FooterComponent,
    Industry40Component,
    VerticalsTemplateComponent,
    ProductTemplateComponent,
    VerticalsVideoComponent,
    VerticalsCardComponent,
    RAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
