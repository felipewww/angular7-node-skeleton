import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBasicsComponent } from './modal-basics.component';

describe('ModalBasicsComponent', () => {
  let component: ModalBasicsComponent;
  let fixture: ComponentFixture<ModalBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
