import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltauComponent } from './altau.component';

describe('AltauComponent', () => {
  let component: AltauComponent;
  let fixture: ComponentFixture<AltauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
