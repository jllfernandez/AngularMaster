import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() { }

  execute(){
      console.log('ejecuto para --->Prueba' ); 
    } 
}
