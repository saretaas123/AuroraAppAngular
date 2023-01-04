import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFichaRegistroComponent } from './editar-ficha-registro.component';

describe('EditarFichaRegistroComponent', () => {
  let component: EditarFichaRegistroComponent;
  let fixture: ComponentFixture<EditarFichaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFichaRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFichaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
