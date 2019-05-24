import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuariosService } from '../../core/services/usuarios.service';
import { ModalService } from '../detalleusuario/modal.service';

import { Generic } from '../../core/models/Generic';
import { UsuarioService } from '@app/core/services/usuario.service';

import { SipUsuario } from '../../core/models/SIPUSUARIO';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  links: Array<any> = [
    { link: '/empresas', logo: 'assets/img/empresas.png' },
    { link: '/empresas', logo: 'assets/img/categorias.png' },
    { link: '/empresas', logo: 'assets/img/ok.png' },
    { link: '/categorias', logo: 'assets/img/guardar.png' },
    { link: '/categorias', logo: 'assets/img/editar.png' }
  ];

  columnas: Array<any> = [
    { name: 'LOGIN', label: 'Login' },
    { name: 'APELLIDOS', label: 'Apellidos' },
    { name: 'NOMBRE', label: 'Nombre' },
    { name: 'DNI', label: 'Dni' },
    { name: 'PERFIL', label: 'Perfil Usuario' },
    { name: 'NAMEEMPRESA', label: 'Empresa' }
  ];

  mostradas: string[] = ['LOGIN', 'APELLIDOS', 'NOMBRE', 'DNI', 'PERFIL', 'NAMEEMPRESA'];

  dataSource: SipUsuario[];

  leftButtons: Array<any> = [];

  rightButtons: Array<any> = [{ action: 'cerrar', label: 'Cerrar' }];

  titulo: string;
  labelTitulo = 'Usuarios del sistema';

  tableFoot: string;
  labelTableFoot = ' usuarios listados';

  constructor(
    //private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private usuarioService: UsuarioService
  ) {
    this.titulo = this.labelTitulo;
    this.tableFoot = this.labelTableFoot;
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(response => {
      console.log(<SipUsuario[]>response);
      this.dataSource = response;
    });
  }

  processClickRow(row: string) {
    console.log('Click en Usuarios: ', row);
    this.modalService.openModal();
  }

  processEditRow(row: any) {
    console.log('Edit en Usuarios: ', row.id);
    this.modalService.openModal();
    this.router.navigate(['detalleusuario', row.id]);
  }

  processDeleteRow(row: any) {
    console.log('Delete en Usuarios: ', row.id);
  }

  processButton(button: any) {
    console.log('Proceso: ', button.action);
  }
}
