import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaListaPsicologoComponent } from './tabla-lista-psicologo.component';

describe('TablaListaPsicologoComponent', () => {
  let component: TablaListaPsicologoComponent;
  let fixture: ComponentFixture<TablaListaPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaListaPsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaListaPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
