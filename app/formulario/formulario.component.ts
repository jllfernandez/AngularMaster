import { Component, OnInit } from '@angular/core';

//Models
import { ContactModel } from '../models/ContactModel';
import { Cliente } from '../models/Cliente';

//services en angular
import { ServicioFormulario } from '../servicios/servicioFormulario/ServicioFormulario';
import { ServicioClientes } from '../servicios/servicioClientes/ServicioClientes';
import { PruebaService } from '../servicios/prueba/prueba.service';

//material desing de angular
import {MatSnackBar} from '@angular/material';
// Esta linea fue agregada automaticamente pueden borrarlo
import { NgForm } from '@angular/forms/src/directives/ng_form';

import {Router, ActivatedRoute} from '@angular/router';

import swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  clienteModel = new Cliente();
  private titulo:string = "Crear Cliente"

  constructor(private miServicio: ServicioFormulario, private servicioCliente: ServicioClientes, 
    private router: Router, private pruebaService: PruebaService) { }
  

  ngOnInit() { 
  }

  onSubmit(f: NgForm){
    this.callService(this.clienteModel, f);
}
//metodo de services
callService(cli:Cliente, f: NgForm){
    
  
      swal.fire("Good job!", "You clicked the button!", "success")
      this.miServicio.execute(cli);
      
  
}

create(): void {
  this.servicioCliente.createCliente(this.clienteModel).subscribe(clienteModel=> {this.router.navigate(['clientes'])
    swal.fire('Nuevo cliente', `Cliente ${this.clienteModel.nombre} creado con éxito!`, 'success')
  }
  );
}

prueba(): void {
    this.pruebaService.execute();
}

update():void{
  this.servicioCliente.updateCliente(this.clienteModel)
  .subscribe( clienteModel => {
    this.router.navigate(['clientes'])
    swal.fire('Cliente Actualizado', `Cliente ${clienteModel.nombre} actualizado con éxito!`, 'success')
  }

  )
}




}
