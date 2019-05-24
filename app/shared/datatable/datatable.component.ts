import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Generic } from '../../core/models/Generic';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input() columnas: Array<any>;
  @Input() mostradas: Array<string>;
  @Input() dataSource: Generic[];
  @Input() titulo: string;
  @Input() tableFoot: string;

  @Output() clickedRow = new EventEmitter<string>();
  @Output() editedRow = new EventEmitter<string>();
  @Output() deletedRow = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onRowClicked(row: string) {
    //console.log('Row clicked: ', row);
    this.clickedRow.emit(row);
  }

  onRowEdited(row: any) {
    //console.log('Row clicked: ', row);
    this.editedRow.emit(row);
  }

  onRowDeleted(row: any) {
    //console.log('Row clicked: ', row);
    this.deletedRow.emit(row);
  }
}
