import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuComponent } from './updateu.component';

describe('UpdateuComponent', () => {
  let component: UpdateuComponent;
  let fixture: ComponentFixture<UpdateuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
