import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProjects } from '../ngrx/actions/projects.actions';
import { Project } from '../ngrx/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  $projects: Observable<Project[]> = this.store.select(state => state.projects);

  constructor(
    private store: Store<{ projects: Project[] }>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
  }

}
