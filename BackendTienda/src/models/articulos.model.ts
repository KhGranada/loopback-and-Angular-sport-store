import {Entity, model, property} from '@loopback/repository';

@model()
export class Articulos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  referencia: string;

  @property({
    type: 'string',
    required: true,
  })
  stock: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
  })
  ventasId?: string;

  constructor(data?: Partial<Articulos>) {
    super(data);
  }
}

export interface ArticulosRelations {
  // describe navigational properties here
}

export type ArticulosWithRelations = Articulos & ArticulosRelations;
