import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPsicologoComponent } from './editar-psicologo.component';

describe('EditarPsicologoComponent', () => {
  let component: EditarPsicologoComponent;
  let fixture: ComponentFixture<EditarPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
