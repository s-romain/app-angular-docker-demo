import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AlertsComponent } from './alerts/alerts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './projects/projects.component';
import { projectsReducer } from './ngrx/reducers/projects.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './ngrx/effects/project.effects';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavbarComponent,
    DashboardComponent,
    ActivitiesComponent,
    AlertsComponent,
    ProjectsComponent
  ],
  imports: [
    StoreModule.forRoot({ projects: projectsReducer }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([ProjectEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
