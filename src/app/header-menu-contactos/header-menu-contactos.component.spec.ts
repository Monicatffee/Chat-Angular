import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuContactosComponent } from './header-menu-contactos.component';

describe('HeaderMenuContactosComponent', () => {
  let component: HeaderMenuContactosComponent;
  let fixture: ComponentFixture<HeaderMenuContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
