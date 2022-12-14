import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';
import {MenuComponent} from './Pages/menu/menu.component';
import {ContactComponent} from './Pages/contact/contact.component';
import {AboutComponent} from './Pages/about/about.component';
import { MenupageComponent } from './Pages/menupage/menupage.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'menu/:id', component: MenupageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
