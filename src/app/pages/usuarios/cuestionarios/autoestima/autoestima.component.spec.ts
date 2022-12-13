import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoestimaComponent } from './autoestima.component';

describe('AutoestimaComponent', () => {
  let component: AutoestimaComponent;
  let fixture: ComponentFixture<AutoestimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoestimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoestimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
