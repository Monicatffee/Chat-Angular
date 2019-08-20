import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenContactoComponent } from './imagen-contacto.component';

describe('ImagenContactoComponent', () => {
  let component: ImagenContactoComponent;
  let fixture: ComponentFixture<ImagenContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
