import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Sms} from '../model/Sms';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  private baseUrl = 'http://localhost:8999';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private options = {headers: this.headers};

  private sms = new Sms();

  constructor(private http: HttpClient) {
  }

  getSms(): Observable<any> {
    return this.http.get(this.baseUrl + '/sms', this.options).pipe(catchError(this.handleError));
  }

  private handleError = error => {
    return throwError(error);
  }
}
