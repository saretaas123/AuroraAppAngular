import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAutoestimaComponent } from './grafico-autoestima.component';

describe('GraficoAutoestimaComponent', () => {
  let component: GraficoAutoestimaComponent;
  let fixture: ComponentFixture<GraficoAutoestimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoAutoestimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoAutoestimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
