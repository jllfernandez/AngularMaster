import { Component, OnInit, Input } from '@angular/core';

import { UsuariosService } from '../../core/services/usuarios.service';

@Component({
  selector: 'app-tree-ejemplo',
  templateUrl: './tree-ejemplo.component.html',
  styleUrls: ['./tree-ejemplo.component.scss']
})
export class TreeEjemploComponent implements OnInit {
  dataSource: any[];

  titulo: string;
  labelTitulo = 'Arbol/Relacion de ejemplo';

  constructor(private usuariosService: UsuariosService) {
    this.titulo = this.labelTitulo;
  }

  ngOnInit() {
    this.usuariosService.getTree().subscribe(response => {
      console.log(<any[]>response);
      this.dataSource = this.renderTree(response);
    });
  }

  processClickItem(item: any) {
    console.log('Click en TreeEjemplo: ', item.name);
  }

  renderTree(source: any[]) {
    for (var i = 0, max = source.length; i < max; i += 1) {
      if (source[i].subnodes.length > 0) {
        source[i].subnodes = this.renderTree(source[i].subnodes);
      }
      source[i]['class'] = this.mapeo(source[i].name);
    }

    return source;
  }

  mapeo(key: string) {
    if (key == 'c1') return 'fas fa-users ic-w mr-1';
    else if (key == 'c2') return 'far fa-eye ic-w mr-1';
    else if (key == 'c3') return 'fas fa-pizza-slice ic-w mr-1';
    else if (key == 'c4') return 'fas fa-cocktail ic-w mr-1';
    else if (key == 'c411') return 'fas fa-pepper-hot ic-w mr-1';
    else if (key == 'Paco') return 'fas fa-basketball-ball ic-w mr-1';
    else if (key == 'Antonio') return 'far fa-folder-open ic-w mr-1';
    else if (key == 'Carlos') return 'far fa-folder-open ic-w mr-1';

    return 'fas fa-gamepad ic-w mr-1';
  }
}
