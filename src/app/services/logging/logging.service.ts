import { Credentials } from './../../models/credentials.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private logUrl = 'http://10.0.1.14:9000/projetCdb/api/users';
  private registerUrl = 'http://10.0.1.14:9000/projetCdb/api/users';

  constructor(private http: HttpClient) { }

  log(credentials: Credentials): Observable<Credentials> {
    return this.http.post<any>(this.logUrl, credentials);
  }

  register(credentials: Credentials): Observable<Credentials> {
    return this.http.post<any>(this.registerUrl, credentials)
  }
}
  