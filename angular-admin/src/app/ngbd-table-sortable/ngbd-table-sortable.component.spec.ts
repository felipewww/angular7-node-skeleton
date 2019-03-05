import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTableSortableComponent } from './ngbd-table-sortable.component';

describe('NgbdTableSortableComponent', () => {
  let component: NgbdTableSortableComponent;
  let fixture: ComponentFixture<NgbdTableSortableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdTableSortableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTableSortableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
