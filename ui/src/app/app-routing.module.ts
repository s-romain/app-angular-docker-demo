import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'alerts', component: AlertsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
