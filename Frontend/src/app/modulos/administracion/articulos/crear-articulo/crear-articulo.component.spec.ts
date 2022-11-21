import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArticuloComponent } from './crear-articulo.component';

describe('CrearArticuloComponent', () => {
  let component: CrearArticuloComponent;
  let fixture: ComponentFixture<CrearArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearArticuloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
