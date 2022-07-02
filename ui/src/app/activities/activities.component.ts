import { Component } from '@angular/core';
import { faArrowRight, faArrowLeft, faRotateRight, faCloudArrowUp, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProjects } from '../ngrx/actions/projects.actions';
import { Project } from '../ngrx/model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent {

  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faRotateRight = faRotateRight;
  faCloudArrowUp = faCloudArrowUp;
  faFloppyDisk = faFloppyDisk;

  pulseReload = false;

  constructor(
    private store: Store<{ projects: Project[] }>,
  ) { }

  $projects: Observable<Project[]> = this.store.select(state => state.projects);

  getAllProjects() {
    console.log('[ActivitiesComponent] getAllProjects');
    this.pulseReload = true;
    this.store.dispatch(loadProjects());
    setTimeout(() => { this.pulseReload = false; }, 1000);
  }

}
