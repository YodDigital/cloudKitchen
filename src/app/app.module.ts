import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedPages/navbar/navbar.component';
import { FooterComponent } from './sharedPages/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { FoodboxComponent } from './Pages/Model/foodbox/foodbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenupageComponent } from './Pages/menupage/menupage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    FoodboxComponent,
    MenupageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
