import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  //*public autor: any = {nombre:'Andrés', apellido: 'Guzmán'};
  public title = "Inicio";
  constructor() { }

  ngOnInit() {
  }

}
