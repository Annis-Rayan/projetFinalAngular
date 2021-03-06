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
import {FormLoginComponent} from './component/form-login/form-login.component';
import {InscriptionComponent} from './component/inscription/inscription.component';
import {SingleAnimalComponent} from './component/single-animal/single-animal.component';
import {SingleLieuComponent} from './component/single-lieu/single-lieu.component';
import {SingleObsComponent} from './component/single-obs/single-obs.component';
import {SingleUserComponent} from './component/single-user/single-user.component';
import {TestCommand} from '@angular/cli/commands/test-impl';
import {TestComponent} from './component/test/test.component';
import {CreateAnimalPageComponent} from './component/create-animal-page/create-animal-page.component';
import {CreateObservationPageComponent} from './component/create-observation-page/create-observation-page.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'login', component: FormLoginComponent},
  {path: 'inscription', component: InscriptionComponent},

  {path: 'users', component: MultipleUsersComponent}, //canActivate: [CanActivateService]},
  {path: 'users/edit', component: SignInComponent}, //canActivate: [CanActivateService]},
  {path: 'users/edit/:id', component: SignInComponent}, //canActivate: [CanActivateService]},
  {path: 'users/edit/:id/upload', component: SignInComponent},
  {path: 'users/single/:id', component: SingleUserComponent}, //canActivate: [CanActivateService]},
  {path: 'users/provisaryregister', component: ProvisaryRegisterComponent},

  {path: 'observation', component: ObservationsComponent},
  {path: 'observation/create', component: CreateObservationPageComponent},
  {path: 'observation/single/:id', component: SingleObsComponent},
  {path: 'observation/edit', component: EditObservationsComponent},// canActivate: [CanActivateService]},
  {path: 'observation/edit/:id', component: EditObservationsComponent}, //canActivate: [CanActivateService]},

  {path: 'animal', component: AnimauxComponent},
  {path: 'animal/create', component: CreateAnimalPageComponent},
  {path: 'animal/single/:id', component: SingleAnimalComponent},
  {path: 'animal/edit', component: EditAnimauxComponent},// canActivate: [CanActivateService]},
  {path: 'animal/edit/:id', component: EditAnimauxComponent}, //canActivate: [CanActivateService]},

  {path: 'localisation', component: LieuxComponent},
  {path: 'localisation/single/:id', component: SingleLieuComponent},
  {path: 'localisation/edit', component: EditLieuxComponent},// canActivate: [CanActivateService]},
  {path: 'localisation/edit/:id', component: EditLieuxComponent}, //canActivate: [CanActivateService]},

  {path: 'image', component: TestComponent}


];
