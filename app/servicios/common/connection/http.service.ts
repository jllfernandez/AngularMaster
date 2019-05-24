import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urlEndPoint: string = '';//TODO definir'http://127.0.0.1:8080/api';

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin','*')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8');
      //.set('Authorization', localStorage.getItem("Token_Full").toString())
      //.set('Authorization', 'Bearer ' + localStorage.getItem("Token_Full").toString());
       

  
  constructor(private http: HttpClient) { }

  create(param: string, novo: any) : Observable<any> {
    return this.http.post<any>(this.urlEndPoint + param, novo, {headers: this.headers})
  }

  read(param:string): Observable<any> {
    return this.http.get(this.urlEndPoint + param, { headers: this.headers}).pipe(
      map(response => response as any));
  }
  
  readById(param: string, id: number): Observable<any>{
    return this.http.get(`${this.urlEndPoint + param}/${id}`, { headers: this.headers}).pipe(
      map(response => response as any));(`${this.urlEndPoint}/${id}`)
  }

  update(param : string, novo: any): Observable<any>{
    return this.http.put<any>(this.urlEndPoint + param, novo, {headers: this.headers})
  }

  delete(param: string, id: number): Observable<any>{
    return this.http.delete<any>(`${this.urlEndPoint + param}/${id}`, {headers: this.headers})
  }

}
