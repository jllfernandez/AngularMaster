import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeEjemploComponent } from './tree-ejemplo.component';

describe('TreeEjemploComponent', () => {
  let component: TreeEjemploComponent;
  let fixture: ComponentFixture<TreeEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TreeEjemploComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
