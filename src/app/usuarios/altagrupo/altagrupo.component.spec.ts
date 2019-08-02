import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltagrupoComponent } from './altagrupo.component';

describe('AltagrupoComponent', () => {
  let component: AltagrupoComponent;
  let fixture: ComponentFixture<AltagrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltagrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltagrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
