import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { ServicioHttp } from '../common/ServicioHttp';
import { HttpService } from '../common/connection/http.service';
import { Son } from 'src/app/models/Son';
import { Father } from 'src/app/models/Father';

@Injectable({
  providedIn: 'root'
})
export class ParticularService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
    constructor(private servicioHttp: HttpService) { }
  
    getClientes(): Observable<Son[]> {
      return null;//return <Observable<Son[]>>this.servicioHttp.getListado();
    }
}
