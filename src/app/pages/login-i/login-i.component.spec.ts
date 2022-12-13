import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIComponent } from './login-i.component';

describe('LoginIComponent', () => {
  let component: LoginIComponent;
  let fixture: ComponentFixture<LoginIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
