import {Injectable} from "@angular/core";
import {Headers, Http, Response,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ListOfTask} from "../model/list";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
@Injectable()
export class DashboardService {

  private localhost = 'http://localhost:8080/lists';

  constructor(private http: Http) {
  }

  getAll(): Observable<ListOfTask[]> {
    return this.http.get(this.localhost)
      .map(res => res.json());
  }

  getListsTest() {
    return this.http.get(this.localhost)
      .subscribe(data => console.log(data))
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
