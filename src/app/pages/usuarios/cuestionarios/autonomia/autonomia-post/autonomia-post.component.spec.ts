import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomiaPostComponent } from './autonomia-post.component';

describe('AutonomiaPostComponent', () => {
  let component: AutonomiaPostComponent;
  let fixture: ComponentFixture<AutonomiaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomiaPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutonomiaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
