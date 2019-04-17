import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from 'src/app/models/computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private url = 'http://10.0.1.14:9000/projetCdb/api/computers';
  constructor(private http: HttpClient) {}
  
  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.url);
  }

  getComputer(id: String): Observable<Computer> {
    return this.http.get<Computer>(`${ this.url }/${ id }`);
  }

  add(computer: Computer): Observable<void> {
    return this.http.post<void>(this.url, computer);
  }

  delete(id: String): Observable<void> {
    return this.http.delete<void>(`${ this.url }/${ id }`);
  }

  update(computer: Computer): Observable<void> {
    return this.http.patch<void>(`${ this.url }/${ computer.id }`, computer);
  }
}
