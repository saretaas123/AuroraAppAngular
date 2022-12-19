import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivacionPostComponent } from './motivacion-post.component';

describe('MotivacionPostComponent', () => {
  let component: MotivacionPostComponent;
  let fixture: ComponentFixture<MotivacionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivacionPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivacionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
