import { Component } from '@angular/core';

import { faPlusCircle, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare as faPenToSquareRegular, faTrashAlt, faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { Project, Task } from '../ngrx/model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addTask, removeTask } from '../ngrx/actions/tasks.actions';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  hiddenProjects = new Map();

  // Font Awesome Icons
  faPenToSquare = faPenToSquareRegular;
  faTrashAlt = faTrashAlt;
  faCommentDots = faCommentDots;
  faPlusCircle = faPlusCircle;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;

  constructor(
    private store: Store<{ projects: Project[] }>,
  ) {
  }

  $projects: Observable<Project[]> = this.store.select(state => state.projects);

  week: any[] = [
    { day: 'Lun', date: '01/01', closed: true },
    { day: 'Mar', date: '02/01', closed: false },
    { day: 'Mer', date: '03/01', closed: false },
    { day: 'Jeu', date: '04/01', closed: false },
    { day: 'Ven', date: '05/01', closed: false },
    { day: 'Sam', date: '06/01', closed: true },
    { day: 'Dim', date: '07/01', closed: true }
  ];

  /**
   * Ajoute une tache à un projet
   * @param p projet
   */
  addActivity(p: any): void {
    console.log('[TaskComponent] addActivity', p);
    let newTaskName = (<HTMLInputElement>document.getElementById("input-new-task-" + p.id)).value;
    let task: Task = <Task>{
      name: newTaskName,
      idProject: p.id
    };
    this.store.dispatch(addTask({ task }));
  }

  /**
   * Supprime une tache
   * @param task task/activity
   */
  deleteActivity(task: Task): void {
    console.log('[TaskComponent] deleteActivity', task);
    this.store.dispatch(removeTask({ task }));
  }

  /**
   * Change l'état de visibilité d'un projet
   */
  changeVisibility(project: Project) {
    console.log('[TaskComponent] changeProjectVisibility');
    this.hiddenProjects.set(project.id, !this.hiddenProjects.get(project.id));
  }
}
