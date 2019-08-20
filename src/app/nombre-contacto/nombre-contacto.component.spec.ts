import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreContactoComponent } from './nombre-contacto.component';

describe('NombreContactoComponent', () => {
  let component: NombreContactoComponent;
  let fixture: ComponentFixture<NombreContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
