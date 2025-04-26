import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicConditionalComponent } from './dynamic-conditional.component';

describe('DynamicConditionalComponent', () => {
  let component: DynamicConditionalComponent;
  let fixture: ComponentFixture<DynamicConditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicConditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
