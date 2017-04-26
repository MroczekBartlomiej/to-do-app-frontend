import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import {ListOfTask} from '../model/listOfTask';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {

  private listUrl = 'http://localhost:8080/lists';

  constructor(private http: Http) {
  }

  create(newList: ListOfTask): Observable <ListOfTask> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers, method: RequestMethod.Post});

    return this.http.post(this.listUrl, newList, options)
      .map(this.toJSON)
      .catch(this.handleError);
  }

  getAll(): Observable<ListOfTask[]> {
    return this.http.get(this.listUrl)
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
