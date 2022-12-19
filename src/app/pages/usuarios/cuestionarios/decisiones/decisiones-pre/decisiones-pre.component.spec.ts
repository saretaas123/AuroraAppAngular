import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionesPreComponent } from './decisiones-pre.component';

describe('DecisionesPreComponent', () => {
  let component: DecisionesPreComponent;
  let fixture: ComponentFixture<DecisionesPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionesPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionesPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
