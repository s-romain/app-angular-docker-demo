import { createAction, props } from '@ngrx/store';
import { Project } from '../model';

export const loadProjects = createAction('[Projects Page] Load Projects');

export const loadProjectsSuccess = createAction(
    '[Projects API] Projects Loaded Success',
    props<{ payload: ReadonlyArray<Project> }>()
);

export const loadProjectsError = createAction('[Projects API] Projects Loaded Error');