import { Component, OnInit } from '@angular/core';

import { Usuario } from '../models/Usuario';
import { Capability } from '../models/Capability';
import { UsuariosService } from '../servicios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[];
  res:JSON;
  paginador: any;
  tipo: string = "usuarios";


  constructor(private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
       
     this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
  
      if (!page) {
        page = 0;
      }
      //alert('Page --->' + page);
      this.usuarioService.getUsuariosPaginados(page)
        .pipe(
          tap(response => {
            //console.log('UsuariosComponent: tap 3' + response);
            (response.content as Usuario[]).forEach(usuario => console.log(usuario.login+ ', con Role ' + usuario.role.code));
            ///(response.content.usuario.role.capabilityes as Capability[]).forEach(cap => console.log(cap.code));
            //((response.content as Usuario[]).forEach(cap => usuario.role.capabilityes as Capability[])).forEach(cap => console.log(cap.code));
            
          })
        ).subscribe(response => {
          this.usuarios = response.content as Usuario[];
          this.paginador = response;
        });
        
    }); 
  
    }

}
