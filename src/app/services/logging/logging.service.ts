import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private url = 'http://10.0.1.14:9000/projetCdb/api/users';

  constructor(private http: HttpClient) { }

  log(credentials: any): Observable<any> {
    return this.http.post<any>(this.url, credentials);
  }
}
