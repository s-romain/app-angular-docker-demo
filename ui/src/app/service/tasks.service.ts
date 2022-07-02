import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../ngrx/model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private rootURL = '/api/tasks';

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
   * Ajoute une activité à un projet
   * @returns 
   */
  postTask(task: Task): Observable<Task[]> {
    console.log('[TasksService] postTask', task);
    return this.http.post<Task[]>(this.rootURL, task, this.httpOptions);
  }

  /**
   * Supprime une activité
   * @returns 
   */
  deleteTask(idTask: number): Observable<number> {
    console.log('[TasksService] deleteTask', idTask);
    return this.http.delete<number>(this.rootURL + '/' + idTask, this.httpOptions);
  }

}
