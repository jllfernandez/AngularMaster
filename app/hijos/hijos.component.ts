import { Component, OnInit } from '@angular/core';

import { Son} from '../models/Son';
import { ParticularService } from '../servicios/servicioParticular/particular.service';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.scss']
})
export class HijosComponent implements OnInit {

  sons: Son[];

  constructor(private servicio: ParticularService) { }
  

  ngOnInit() {
    this.servicio.getClientes().subscribe(
      sons => this.sons = sons
   );

  }

}
