import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8888/api';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};
  private user = new User();

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl + '/users', this.options).pipe(catchError(this.handleError));
  }

  getUser(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/user/' + id, this.options).pipe(catchError(this.handleError));
  }

  deleteUser(id: number): any {

    return this.http.delete(this.baseUrl + '/user/' + id, this.options).pipe(catchError(this.handleError));
  }


  createUser(user: User): any {

    return this.http.post(this.baseUrl + '/user', JSON.stringify(user), this.options).pipe(catchError(this.handleError));
  }

  updateUser(user: User): any {

    return this.http.put(this.baseUrl + '/user', JSON.stringify(user), this.options).pipe(catchError(this.handleError));
  }

  private handleError = error => {
    return throwError(error);
  }

  setter(user: User): void {
    this.user = user;
  }

  getter(): any {
    return this.user;
  }
}
