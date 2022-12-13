import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomiaComponent } from './autonomia.component';

describe('AutonomiaComponent', () => {
  let component: AutonomiaComponent;
  let fixture: ComponentFixture<AutonomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutonomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
