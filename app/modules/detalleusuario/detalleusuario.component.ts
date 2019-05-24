import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuarioService } from '../../core/services/usuario.service';
import { ModalService } from './modal.service';
import { SipUsuario } from '@app/core/models/SIPUSUARIO';

import swal from 'sweetalert2';

@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.component.html',
  styleUrls: ['./detalleusuario.component.scss']
})
export class DetalleusuarioComponent implements OnInit {
  usuario: SipUsuario;
  modaleService: ModalService;
  titulo: string = 'Detalle del usuario';
  progreso: number = 0;
  errores: string[];

  constructor(
    private UsuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    public modalService: ModalService,
    private router: Router
  ) {
    this.modaleService = modalService;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get('id');
      if (id) {
        this.UsuarioService.getUsuario(id).subscribe(usuario => {
          this.usuario = usuario;
        });
      }
    });
  }

  closeModal() {
    this.modaleService.closeModal();
    this.usuario = null;
    this.router.navigate(['usuarios']);
  }

  almacenarCambios() {
    console.log(this.usuario);
    this.UsuarioService.update(this.usuario).subscribe(
      json => {
        swal.fire('Cliente Actualizado', '', 'success');
        this.router.navigate(['usuarios']);
        //swal.fire('Cliente Actualizado', `${json.mensaje}: ${json.usuario.NOMBRE}`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
        swal.fire('No se puedo actualizar', '', 'error');
      }
    );
  }

  changePass() {
    // TODO implements
  }

  aceptar() {
    // TODO implements
  }
}
