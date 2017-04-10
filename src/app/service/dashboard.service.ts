import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ListOfTask} from "../model/listOfTask";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Observable} from "rxjs";
@Injectable()
export class DashboardService {

  private localhost = 'http://localhost:8080/lists';

  constructor(private http: Http) {
  }


  getAll(): Observable<ListOfTask[]>{
    return this.http.get(this.localhost)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
