import { Injectable } from '@angular/core';
import { Cliente } from '../../models/Cliente';
//import { ContactModel } from '../../models/ContactModel';

import { Observable } from 'rxjs'; 
import { ServicioHttp } from '../common/ServicioHttp';
import { HttpService } from '../common/connection/http.service';



@Injectable({
  providedIn: 'root'
})

export class ServicioClientes {
    private urlEndPoint: string = 'http://localhost:8080/api/clientes';
    
    constructor(private servicioHttp: HttpService) { }
    
    getClientesPaginados(page: number): Observable<any> {
      return null;//return <Observable<any>>this.servicioHttp.getListadoPaginado();
    }
  

    getClientes(): Observable<Cliente[]> {
      return null;//return <Observable<Cliente[]>>this.servicioHttp.getListado();
    }
  
    createCliente(novoCliente: Cliente) :  Observable<Cliente> {
     return null;// return <Observable<Cliente>>this.servicioHttp.create(novoCliente);
    }

    updateCliente(novoCliente: Cliente) :  Observable<Cliente> {
      return null;//return <Observable<Cliente>>this.servicioHttp.update(novoCliente);
    }

    deleteCliente(deletedCliente: Cliente) :  Observable<Cliente> {
      return null;//return <Observable<Cliente>>this.servicioHttp.delete(deletedCliente.id);
    }

  }