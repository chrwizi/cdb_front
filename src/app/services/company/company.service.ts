import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/models/company.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  private url = 'http://10.0.1.14:9000/projetCdb/api/companies';
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  getCompany(id: String): Observable<Company> {
    return this.http.get<Company>(`${ this.url }/${ id }`);
  }

  add(company: Company): Observable<void> {
    return this.http.post<void>(this.url, company);
  }

  delete(id: String): Observable<void> {
    return this.http.delete<void>(`${ this.url }/${ id }`);
  }

  update(company: Company): Observable<void> {
    return this.http.patch<void>(`${ this.url }/${ company.id }`, company);
  }
}
