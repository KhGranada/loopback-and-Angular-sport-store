import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarVentaComponent } from './asignar-venta.component';

describe('AsignarVentaComponent', () => {
  let component: AsignarVentaComponent;
  let fixture: ComponentFixture<AsignarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
