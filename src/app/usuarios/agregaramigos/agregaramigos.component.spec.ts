import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaramigosComponent } from './agregaramigos.component';

describe('AgregaramigosComponent', () => {
  let component: AgregaramigosComponent;
  let fixture: ComponentFixture<AgregaramigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaramigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaramigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
