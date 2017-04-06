import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class TaskService {

  private localhost = 'http://localhost:8080/task';


  constructor(private http: Http) {
  }

  getTaskByListId(listId: string){
    const _url = `${this.localhost}/${listId}`;
    return this.http.get(_url)
      .map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
