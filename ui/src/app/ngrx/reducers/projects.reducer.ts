import { createReducer, on } from '@ngrx/store';
import { loadProjectsSuccess } from '../actions/projects.actions';
import { addTask, removeTask } from '../actions/tasks.actions';
import { Project } from '../model';

export const initialState: ReadonlyArray<Project> = [];

export const projectsReducer = createReducer(
    initialState,
    on(loadProjectsSuccess, (state, { payload }) => payload),
    on(removeTask, (state, { task }) => state),
    on(addTask, (state, { task }) => state)
);