import { Component, OnInit } from '@angular/core';

import { Cliente } from '../models/Cliente';
import { ServicioClientes } from '../servicios/servicioClientes/ServicioClientes';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  paginador: any;
  tipo: string = "[/clientes/page";
  
  constructor(private clienteService: ServicioClientes,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.clienteService.getClientes().subscribe(
     // clientes => this.clientes = clientes
   //);

   this.activatedRoute.paramMap.subscribe(params => {
    let page: number = +params.get('page');

    if (!page) {
      page = 0;
    }
    
    this.clienteService.getClientesPaginados(page)
      .pipe(
        tap(response => {
          //console.log('ClientesComponent: tap 3');
          (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
        })
      ).subscribe(response => {
        this.clientes = response.content as Cliente[];
        this.paginador = response;
        //alert('Tipo --->' + this.tipo);
      });
  });

  }

}
