import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivacionComponent } from './motivacion.component';

describe('MotivacionComponent', () => {
  let component: MotivacionComponent;
  let fixture: ComponentFixture<MotivacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
