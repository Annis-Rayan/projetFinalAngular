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
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
