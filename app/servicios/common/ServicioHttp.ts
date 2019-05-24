import { Injectable } from '@angular/core';
import { CLIENTES } from '../servicioClientes/clientes.json';
import { Cliente } from '../../models/Cliente';
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import { of } from 'rxjs/observable/of';
//import { of } from 'rxjs';
//import 'rxjs/add/observable/of';



@Injectable({
  providedIn: 'root'
})

export class ServicioHttp {
  private urlEndPoint: string = '';//'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  //constructor() { }
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as any)//Cliente[])
    );
  }
  /*
  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }
  
  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }*/

}
