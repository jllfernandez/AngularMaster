import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { EmpresasService } from '../../core/services/empresas.service';

import { Empresa } from '../../core/models/Empresa';
import { Generic } from '../../core/models/Generic';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {
  links: Array<any> = [
    { link: '/empresas', logo: 'assets/img/editar.png' },
    { link: '/empresas', logo: 'assets/img/aviso.png' },
    { link: '/empresas', logo: 'assets/img/guardar.png' },
    { link: '/empresas', logo: 'assets/img/ok.png' }
  ];

  columnas: Array<any> = [{ name: 'nombre', label: 'Nombre' }];

  mostradas: string[] = ['nombre'];

  dataSource: Generic[];

  leftButtons: Array<any> = [{ action: 'aceptar', label: 'Aceptar' }, { action: 'cancelar', label: 'Cancelar' }];

  rightButtons: Array<any> = [
    //{ name: 'nombrecategoria', label: 'Nombre' },
    { action: 'cerrar', label: 'Cerrar' }
  ];

  titulo: string;
  labelTitulo = 'Empresas';

  tableFoot: string;
  labelTableFoot = ' empresas listadas';

  constructor(private service: EmpresasService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titulo = this.labelTitulo;
    this.tableFoot = this.labelTableFoot;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.service
        .getEmpresas()
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
    console.log('Click en Empresas: ', row);
  }

  processEditRow(row: any) {
    console.log('Edit en Empresas: ', row.id);
  }

  processDeleteRow(row: any) {
    console.log('Delete en Empresas: ', row.id);
  }

  processButton(button: any) {
    console.log('Proceso: ', button.action);
  }
}
