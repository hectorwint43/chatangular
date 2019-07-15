import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListauComponent } from './listau.component';

describe('ListauComponent', () => {
  let component: ListauComponent;
  let fixture: ComponentFixture<ListauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
