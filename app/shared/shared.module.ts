import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ButtonsboxComponent } from './buttonsbox/buttonsbox.component';

import { LoaderComponent } from './loader/loader.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, DatatableComponent, ToolbarComponent, ButtonsboxComponent, TreeComponent],
  exports: [LoaderComponent, DatatableComponent, ToolbarComponent, ButtonsboxComponent, TreeComponent]
})
export class SharedModule {}
