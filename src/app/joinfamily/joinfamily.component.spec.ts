import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinfamilyComponent } from './joinfamily.component';

describe('JoinfamilyComponent', () => {
  let component: JoinfamilyComponent;
  let fixture: ComponentFixture<JoinfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
