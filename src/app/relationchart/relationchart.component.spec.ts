import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationchartComponent } from './relationchart.component';

describe('RelationchartComponent', () => {
  let component: RelationchartComponent;
  let fixture: ComponentFixture<RelationchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
