import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoestimaPreComponent } from './autoestima-pre.component';

describe('AutoestimaPreComponent', () => {
  let component: AutoestimaPreComponent;
  let fixture: ComponentFixture<AutoestimaPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoestimaPreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoestimaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
