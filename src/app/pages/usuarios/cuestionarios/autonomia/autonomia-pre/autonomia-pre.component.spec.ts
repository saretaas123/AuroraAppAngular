import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomiaPreComponent } from './autonomia-pre.component';

describe('AutonomiaPreComponent', () => {
  let component: AutonomiaPreComponent;
  let fixture: ComponentFixture<AutonomiaPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomiaPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutonomiaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
