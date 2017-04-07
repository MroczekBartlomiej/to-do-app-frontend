import {Injectable} from "@angular/core";
import {Http, Response, RequestMethod} from "@angular/http";
import 'rxjs/add/operator/map'
import {Task} from "../model/task";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TaskService {

  private localhost = 'http://localhost:8080/task';


  constructor(private http: Http) {
  }

  addTask(task: Task) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers,method: RequestMethod.Post });

    console.log("Service add task")
    return this.http.post(this.localhost, task, options)
      .toPromise();
  }

  deleteTask(taskId: string){
    const _url = `${this.localhost}/${taskId}`
    return this.http.delete(_url)
      .toPromise();
  }

  getTaskByListId(listId: string){
    const _url = `${this.localhost}/${listId}`;
    return this.http.get(_url)
      .map(res => res.json());
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
