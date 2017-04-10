import {Injectable} from '@angular/core';
import {Http, Response, RequestMethod, Headers, RequestOptions} from '@angular/http';
import {Task} from "../model/task";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'

@Injectable()
export class TaskService {

  private taskUrl = 'http://localhost:8080/task';

  constructor(private http: Http) {
  }

  create(task: Task): Observable<Task> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers, method: RequestMethod.Post});

    console.log("Service add tasks")
    return this.http.post(this.taskUrl, task, options)
      .map(this.toJSON)
      .catch(this.handleError)
  }

  deleteTask(taskId: string): Observable<any> {
    const _url = `${this.taskUrl}/${taskId}`
    return this.http.delete(_url)
      .catch(this.handleError);
  }

  getTaskByListId(listId: string): Observable<Task[]> {
    const _url = `${this.taskUrl}/${listId}`;
    return this.http.get(_url)
      .map(this.toJSON)
      .catch(this.handleError);
  }

  private toJSON(res: Response) {
    return res.json() || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
