import { Component, OnInit } from '@angular/core';


import { Brother} from '../models/Brother';
import { BrothersService } from '../servicios/servicioBrothers/brothers.service';



@Component({
  selector: 'app-brothers',
  templateUrl: './brothers.component.html',
  styleUrls: ['./brothers.component.scss']
})
export class BrothersComponent implements OnInit {

  brothers: Brother[];

  constructor(private servicio: BrothersService) { }

  ngOnInit() {
    this.servicio.getListado().subscribe(
      brothers => this.brothers = brothers
   );
  }

}
