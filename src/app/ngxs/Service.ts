import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class Service {
  private testAPI = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) {
  }

  getDomain() {
    return this.http.get(`${this.testAPI}${Math.floor(Math.random() * (10) +1)}`)
  }

}
