import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Project } from '../ngrx/model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private rootURL = '/api/projects';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Retourne la liste des projets avec leurs tâches
   * @returns 
   */
  getProjects(): Observable<Project[]> {
    console.log('[ProjectsService] getProjects');
    return this.http.get<Project[]>(this.rootURL);
  }

}
