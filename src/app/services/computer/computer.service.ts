import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from 'src/app/models/computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private url = "http://10.0.1.14:9000/projetCdb";
  constructor(private http: HttpClient) {}

  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.url);
  }
}
