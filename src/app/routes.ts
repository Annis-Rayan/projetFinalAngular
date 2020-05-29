import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},


];
