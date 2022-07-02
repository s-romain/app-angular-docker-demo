import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProjects } from './ngrx/actions/projects.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(loadProjects());
  }
}
