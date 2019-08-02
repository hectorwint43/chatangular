import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachatgrupoComponent } from './areachatgrupo.component';

describe('AreachatgrupoComponent', () => {
  let component: AreachatgrupoComponent;
  let fixture: ComponentFixture<AreachatgrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreachatgrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreachatgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
