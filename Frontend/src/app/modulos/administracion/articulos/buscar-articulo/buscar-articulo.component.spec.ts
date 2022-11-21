import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarArticuloComponent } from './buscar-articulo.component';

describe('BuscarArticuloComponent', () => {
  let component: BuscarArticuloComponent;
  let fixture: ComponentFixture<BuscarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
