import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly apiURL="https://randomuser.me/api/?"
  constructor(private http:HttpClient) { }

  getTables(page:number,results:number): Observable<Array<any>>{
    // console.log(page,results);
    return this.http.get<Array<any>>(`${this.apiURL}page=${page}&results=${results}`);
  }
}
