import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './component/about/about.component';
import {ContactComponent} from './component/contact/contact.component';
import {MultipleUsersComponent} from './component/multiple-users/multiple-users.component';
import {CanActivateService} from './services/can-activate.service';
import {EditUsersComponent} from './component/edit-users/edit-users.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'users', component: MultipleUsersComponent, canActivate: [CanActivateService]},
  {path: 'users/edit', component: EditUsersComponent, canActivate: [CanActivateService]},
  {path: 'users/edit/:id', component: EditUsersComponent, canActivate: [CanActivateService]},
];
