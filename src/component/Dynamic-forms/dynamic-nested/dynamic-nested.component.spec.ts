import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNestedComponent } from './dynamic-nested.component';

describe('DynamicNestedComponent', () => {
  let component: DynamicNestedComponent;
  let fixture: ComponentFixture<DynamicNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
