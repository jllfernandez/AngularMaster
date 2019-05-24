import { Injectable } from '@angular/core';

import {Cliente} from '../../models/Cliente';

@Injectable({
  providedIn: 'root'
})

export class ServicioFormulario {

  constructor() { }

  execute(_body: Cliente){
    //getResponseEmail(_body: ContactForm): Observable<any>{
      // this.http.post('/send.php',_body).subscribe(data =>{
      //   console.log(data);
      //   this.type = JSON.stringify(data);
      // });
      //return this.http.post('/send.php',_body);
      console.log('ejecuto para --->' + _body.nombre);
      console.log('ejecuto para --->' + _body.email); 
    } 
}
