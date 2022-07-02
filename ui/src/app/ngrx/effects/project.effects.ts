import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { ProjectsService } from 'src/app/service/projects.service';
import { TasksService } from 'src/app/service/tasks.service';
import { loadProjects, loadProjectsError, loadProjectsSuccess } from '../actions/projects.actions';
import { addTask, removeTask } from '../actions/tasks.actions';

@Injectable()
export class ProjectEffects {

    constructor(
        private actions$: Actions,
        private projectsService: ProjectsService,
        private tasksService: TasksService
    ) { }

    loadProject$ = createEffect(() => this.actions$.pipe(
        ofType(loadProjects),
        mergeMap(() => this.projectsService.getProjects()
            .pipe(
                map(projects => (loadProjectsSuccess({ payload: projects }))),
                catchError(() => of(loadProjectsError()))
            ))
    ));

    createTask$ = createEffect(() => this.actions$.pipe(
        ofType(addTask),
        exhaustMap(action =>
            this.tasksService.postTask(action.task)
                .pipe(
                    catchError(() => of(loadProjectsError()))
                )),
        mergeMap(() => this.projectsService.getProjects()
            .pipe(
                map(projects => (loadProjectsSuccess({ payload: projects }))),
                catchError(() => of(loadProjectsError()))
            ))

    ));

    removeTask$ = createEffect(() => this.actions$.pipe(
        ofType(removeTask),
        exhaustMap(action =>
            this.tasksService.deleteTask(action.task.id).pipe(
                catchError(() => of(loadProjectsError()))
            )),
        mergeMap(() => this.projectsService.getProjects()
            .pipe(
                map(projects => (loadProjectsSuccess({ payload: projects }))),
                catchError(() => of(loadProjectsError()))
            ))
    ));

}