import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { HeaderComponent } from './Component/header/header.component';
import { IntroComponent } from './Component/intro/intro.component';
import { HighlightsJumbotronComponent } from './Component/highlights-jumbotron/highlights-jumbotron.component';
import { ContainerComponent } from './Component/container/container.component';
import { SocialLinksComponent } from './Component/social-links/social-links.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { SingleUserComponent } from './component/single-user/single-user.component';
import { MultipleUsersComponent } from './component/multiple-users/multiple-users.component';
import { SingleObsComponent } from './component/single-obs/single-obs.component';
import { MultipleObsComponent } from './component/multiple-obs/multiple-obs.component';
import { EditUsersComponent } from './component/edit-users/edit-users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HeaderComponent,
    IntroComponent,
    HighlightsJumbotronComponent,
    ContainerComponent,
    SocialLinksComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    SingleUserComponent,
    MultipleUsersComponent,
    SingleObsComponent,
    MultipleObsComponent,
    EditUsersComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
