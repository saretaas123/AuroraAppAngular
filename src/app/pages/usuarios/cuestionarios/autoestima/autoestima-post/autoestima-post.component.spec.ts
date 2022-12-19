import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoestimaPostComponent } from './autoestima-post.component';

describe('AutoestimaPostComponent', () => {
  let component: AutoestimaPostComponent;
  let fixture: ComponentFixture<AutoestimaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoestimaPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoestimaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
