import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionesPostComponent } from './decisiones-post.component';

describe('DecisionesPostComponent', () => {
  let component: DecisionesPostComponent;
  let fixture: ComponentFixture<DecisionesPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionesPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
