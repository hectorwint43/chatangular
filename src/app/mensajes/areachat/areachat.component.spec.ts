import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreachatComponent } from './areachat.component';

describe('AreachatComponent', () => {
  let component: AreachatComponent;
  let fixture: ComponentFixture<AreachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
