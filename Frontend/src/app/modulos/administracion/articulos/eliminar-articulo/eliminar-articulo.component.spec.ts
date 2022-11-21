import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarArticuloComponent } from './eliminar-articulo.component';

describe('EliminarArticuloComponent', () => {
  let component: EliminarArticuloComponent;
  let fixture: ComponentFixture<EliminarArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
