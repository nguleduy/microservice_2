import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/User';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Nid} from '../model/Nid';
import {Passport} from '../model/Passport';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8888/api';
  private userUrl = 'http://localhost:8777/api/user';
  private pmUrl = 'http://localhost:8777/api/pm';
  private adminUrl = 'http://localhost:8777/api/admin';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  private user = new User();
  private nid = new Nid();
  private passport = new Passport();

  constructor(private http: HttpClient) {
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, {responseType: 'text'});
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, {responseType: 'text'});
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }

  /** Nid */
  getNids(): Observable<any> {
    return this.http.get(this.baseUrl + '/nids', this.options).pipe(catchError(this.handleError));
  }

  getNid(nid: string): any {
    return this.http.get(this.baseUrl + '/nids/' + nid, this.options).pipe(catchError(this.handleError));
  }

  deleteNid(nid: string): any {
    return this.http.delete(this.baseUrl + '/nids/' + nid, this.options).pipe(catchError(this.handleError));
  }

  updateNid(nid: Nid): any {
    return this.http.put(this.baseUrl + '/nid', JSON.stringify(nid), this.options).pipe(catchError(this.handleError));
  }

  createNid(nid: Nid): any {
    return this.http.post(this.baseUrl + '/nid', JSON.stringify(nid), this.options).pipe(catchError(this.handleError));
  }

  setterNid(nid: Nid): void {
    this.nid = nid;
  }

  getterNid(): any {
    return this.nid;
  }

  /** Passport */
  getPassports(): Observable<any> {
    return this.http.get(this.baseUrl + '/passports', this.options).pipe(catchError(this.handleError));
  }

  getPassport(ppid: string): any {
    return this.http.get(this.baseUrl + '/passports/' + ppid, this.options).pipe(catchError(this.handleError));
  }

  deletePassport(ppid: string): any {
    return this.http.delete(this.baseUrl + '/passports/' + ppid, this.options).pipe(catchError(this.handleError));
  }

  updatePassport(passport: Passport): any {
    return this.http.put(this.baseUrl + '/passport', JSON.stringify(passport), this.options).pipe(catchError(this.handleError));
  }

  createPassport(passport: Passport): any {
    return this.http.post(
      this.baseUrl + '/passport', JSON.stringify(passport), this.options
    ).pipe(catchError(this.handleError));
  }

  setterPassport(passport: Passport): void {
    this.passport = passport;
  }

  getterPassport(): any {
    return this.passport;
  }

  /** User */
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
