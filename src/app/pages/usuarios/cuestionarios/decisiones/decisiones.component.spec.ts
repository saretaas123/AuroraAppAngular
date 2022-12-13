import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionesComponent } from './decisiones.component';

describe('DecisionesComponent', () => {
  let component: DecisionesComponent;
  let fixture: ComponentFixture<DecisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
