import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanificacionComponent } from './panificacion.component';

describe('PanificacionComponent', () => {
  let component: PanificacionComponent;
  let fixture: ComponentFixture<PanificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
