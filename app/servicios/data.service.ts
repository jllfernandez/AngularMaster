import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AppearanceModel } from '../models/appearance/appearance.model';


@Injectable()
export class DataService {

  private modelSource = new BehaviorSubject(new AppearanceModel());
  currentModel = this.modelSource.asObservable();

  constructor() { }

  setModel(model: AppearanceModel) {
    this.modelSource.next(model);
  }
  
  /*
  ngOnInit() {
    this.dataService.currentModel.subscribe(model => this.model = model);
    console.log(this.model);
  }


  setModel 
  this.dataService.setModel(event.data);
  */
}
