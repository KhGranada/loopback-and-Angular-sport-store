import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Ventas,
  Articulos,
} from '../models';
import {VentasRepository} from '../repositories';

export class VentasArticulosController {
  constructor(
    @repository(VentasRepository) protected ventasRepository: VentasRepository,
  ) { }

  @get('/ventas/{id}/articulos', {
    responses: {
      '200': {
        description: 'Ventas has one Articulos',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Articulos),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Articulos>,
  ): Promise<Articulos> {
    return this.ventasRepository.articulos(id).get(filter);
  }

  @post('/ventas/{id}/articulos', {
    responses: {
      '200': {
        description: 'Ventas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Articulos)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Ventas.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulos, {
            title: 'NewArticulosInVentas',
            exclude: ['id'],
            optional: ['ventasId']
          }),
        },
      },
    }) articulos: Omit<Articulos, 'id'>,
  ): Promise<Articulos> {
    return this.ventasRepository.articulos(id).create(articulos);
  }

  @patch('/ventas/{id}/articulos', {
    responses: {
      '200': {
        description: 'Ventas.Articulos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulos, {partial: true}),
        },
      },
    })
    articulos: Partial<Articulos>,
    @param.query.object('where', getWhereSchemaFor(Articulos)) where?: Where<Articulos>,
  ): Promise<Count> {
    return this.ventasRepository.articulos(id).patch(articulos, where);
  }

  @del('/ventas/{id}/articulos', {
    responses: {
      '200': {
        description: 'Ventas.Articulos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Articulos)) where?: Where<Articulos>,
  ): Promise<Count> {
    return this.ventasRepository.articulos(id).delete(where);
  }
}
