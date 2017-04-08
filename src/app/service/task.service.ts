import {Injectable} from "@angular/core";
import {Http, Response, RequestMethod} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import {Task} from "../model/task";
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class TaskService {

  private localhost = 'http://localhost:8080/task';


  constructor(private http: Http) {
  }

  create(task: Task): Observable<Task>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers,method: RequestMethod.Post });

    console.log("Service add tasks")
    return this.http.post(this.localhost, task, options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  deleteTask(taskId: string): Observable<any>{
    const _url = `${this.localhost}/${taskId}`
    return this.http.delete(_url)
      .catch(this.handleError);
  }

  getTaskByListId(listId: string): Observable<Task[]>{
    const _url = `${this.localhost}/${listId}`;
    return this.http.get(_url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
