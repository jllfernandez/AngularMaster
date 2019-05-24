import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { CategoriasService } from '../../core/services/categorias.service';

import { Generic } from '../../core/models/Generic';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  links: Array<any> = [
    { link: '/categorias', logo: 'assets/img/guardar.png' },
    { link: '/categorias', logo: 'assets/img/editar.png' },
    { link: '/categorias', logo: 'assets/img/ok.png' }
  ];

  columnas: Array<any> = [
    { name: 'nombrecategoria', label: 'Nombre' },
    { name: 'desccategoria', label: 'Descripcion' }
  ];

  mostradas: string[] = ['nombrecategoria', 'desccategoria'];

  leftButtons: Array<any> = [{ action: 'aceptar', label: 'Aceptar' }, { action: 'cancelar', label: 'Cancelar' }];

  rightButtons: Array<any> = [
    //{ name: 'nombrecategoria', label: 'Nombre' },
    { action: 'cerrar', label: 'Cerrar' }
  ];

  dataSource: Generic[];

  titulo: string;
  labelTitulo = 'Mantenimiento de Categorias';

  tableFoot: string;
  labelTableFoot = ' categorías listadas';

  constructor(private service: CategoriasService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titulo = this.labelTitulo;
    this.tableFoot = this.labelTableFoot;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.service
        .getCategorias()
        .pipe(
          tap(response => {
            console.log('UsuariosComponent: tap 3' + response);
            //(response.content as Empresa[]).forEach(empresa => console.log('Con Nombre ' + empresa.nombre)
            //);
            //(response.content.usuario.role.capabilitys as capabilitys[]).forEach(cap => console.log(cap.code));
            //(response.content.usuario.role.capabilitys as capabilitys[]).forEach(cap => console.log(cap.code));
            //((response.content as Usuario[]).forEach(cap => usuario.role.capabilityes as Capability[])).forEach(cap => console.log(cap.code));
          })
        )
        .subscribe(response => {
          this.dataSource = response.content as Generic[];
        });
    });
  }

  processClickRow(row: string) {
    console.log('Click en Categorias: ', row);
  }

  processEditRow(row: any) {
    console.log('Edit en Categorias: ', row.id);
  }

  processDeleteRow(row: any) {
    console.log('Delete en Categorias: ', row.id);
  }

  processButton(button: any) {
    console.log('Proceso: ', button.action);
  }
}
