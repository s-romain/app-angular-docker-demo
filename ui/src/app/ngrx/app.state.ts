import { Project } from "./model";

export interface AppState {
    projects: ReadonlyArray<Project>;
}