import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './component/about/about.component';
import {ContactComponent} from './component/contact/contact.component';
import {MultipleUsersComponent} from './component/multiple-users/multiple-users.component';
import {CanActivateService} from './services/can-activate.service';
import {EditUsersComponent} from './component/edit-users/edit-users.component';
import {ObservationsComponent} from './component/observations/observations.component';
import {AnimauxComponent} from './component/animaux/animaux.component';
import {LieuxComponent} from './component/lieux/lieux.component';
import {ProvisaryRegisterComponent} from './component/provisary-register/provisary-register.component';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {EditAnimauxComponent} from './component/edit-animaux/edit-animaux.component';
import {EditLieuxComponent} from './component/edit-lieux/edit-lieux.component';
import {EditObservationsComponent} from './component/edit-observations/edit-observations.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'users', component: MultipleUsersComponent},// canActivate: [CanActivateService]},
  {path: 'users/edit', component: SignInComponent},// canActivate: [CanActivateService]},
  {path: 'users/edit/:id', component: SignInComponent}, //canActivate: [CanActivateService]},
  {path: 'users/provisaryregister', component: ProvisaryRegisterComponent},

  {path: 'observations', component: ObservationsComponent},
  {path: 'observations/edit', component: EditObservationsComponent},// canActivate: [CanActivateService]},
  {path: 'observations/edit/:id', component: EditObservationsComponent}, //canActivate: [CanActivateService]},

  {path: 'animaux', component: AnimauxComponent},
  {path: 'animaux/edit', component: EditAnimauxComponent},// canActivate: [CanActivateService]},
  {path: 'animaux/edit/:id', component: EditAnimauxComponent}, //canActivate: [CanActivateService]},

  {path: 'lieux', component: LieuxComponent},
  {path: 'lieux/edit', component: EditLieuxComponent},// canActivate: [CanActivateService]},
  {path: 'lieux/edit/:id', component: EditLieuxComponent}, //canActivate: [CanActivateService]},



];
