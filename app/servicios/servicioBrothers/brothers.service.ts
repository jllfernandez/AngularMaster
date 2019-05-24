import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'; 
import { ServicioHttp } from '../common/ServicioHttp';
import { HttpService } from '../common/connection/http.service';
import { Brother } from 'src/app/models/Brother';
import { Father } from 'src/app/models/Father';

@Injectable({
  providedIn: 'root'
})
export class BrothersService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';
    constructor(private servicioHttp: HttpService) { }
  
    getListado(): Observable<Brother[]> {
      return null;//return <Observable<Brother[]>>this.servicioHttp.getBrothers();
    }
}
