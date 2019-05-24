import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { of } from 'rxjs';

import { HttpService } from '../../app/servicios/common/connection/http.service';


//import { USUARIOS } from '../mocks/usuarios.json';
//import { USER } from '../mocks/usuario.json';
//import { TREE } from '../mocks/tree.json';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private servicioHttp: HttpService) { }


  getUsuarioById(id: number): Observable<any> {

    return <Observable<any>> this.servicioHttp.readById('/usuarios/', id);
  }
  
  getUsuarios(): Observable<any> {
    /*
    var arr = USUARIOS.content;

    for (var i = 0, max = arr.length; i < max; i += 1) {
      //console.log(arr[i].mantenimientoCat.nombre);
      arr[i]['mantenimientonombre'] = arr[i].mantenimientoCat.nombre;
      arr[i]['empresanombre'] = arr[i].empresa.nombre;
    }

    USUARIOS.content = arr;

    return of(USUARIOS);*/
    return null;
  }

  getUsuariosPaginados(id: number): Observable<any> {
    return null;//return of(USER[0]);
  }

  getUsuarioWithId(id: number): Observable<any> {
    return null;//return of(USER[0]);
  }

  getTree(): Observable<any> {
    return null;//return of(TREE);
  }
}
