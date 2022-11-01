import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { DarkModeModule } from './services/dark-mode-services/dark-mode.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ToHtmlPipe } from './to-html.pipe';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent,
    DarkModeToggleComponent,
    ProjectDetailsComponent,
    ToHtmlPipe,
    SelectLanguageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    
    AppRoutingModule,
    DarkModeModule,
    NgbModule,
    I18nModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
