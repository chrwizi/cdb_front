import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  private url = 'http://localhost:8080/projetCdb';
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }
}
