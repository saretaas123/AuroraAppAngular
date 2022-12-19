import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivacionPreComponent } from './motivacion-pre.component';

describe('MotivacionPreComponent', () => {
  let component: MotivacionPreComponent;
  let fixture: ComponentFixture<MotivacionPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivacionPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivacionPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
