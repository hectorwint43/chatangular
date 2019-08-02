import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaramigogrupoComponent } from './agregaramigogrupo.component';

describe('AgregaramigogrupoComponent', () => {
  let component: AgregaramigogrupoComponent;
  let fixture: ComponentFixture<AgregaramigogrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaramigogrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaramigogrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
