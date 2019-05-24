import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TREE } from '../../core/mocks/tree.json';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() dataSource: any[];
  @Input() titulo: string;

  @Output() clickedItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  click() {
    var toggler = document.getElementsByClassName('caret');
    var i;
    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
        this.parentElement.querySelector('.nested').classList.toggle('active');
        this.classList.toggle('caret-down');
      });
    }
  }

  onClick(item: any) {
    //console.log('Item clicked: ', item.name);
    this.click();
    this.clickedItem.emit(item);
  }
}
