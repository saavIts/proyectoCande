import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposteriaComponent } from './reposteria.component';

describe('ReposteriaComponent', () => {
  let component: ReposteriaComponent;
  let fixture: ComponentFixture<ReposteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
