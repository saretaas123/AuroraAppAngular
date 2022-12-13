import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtestComponent } from './protest.component';

describe('ProtestComponent', () => {
  let component: ProtestComponent;
  let fixture: ComponentFixture<ProtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
