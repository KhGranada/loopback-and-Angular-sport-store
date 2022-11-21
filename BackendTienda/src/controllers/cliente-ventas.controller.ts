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
  Cliente,
  Ventas,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteVentasController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/ventas', {
    responses: {
      '200': {
        description: 'Array of Cliente has many Ventas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ventas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Ventas>,
  ): Promise<Ventas[]> {
    return this.clienteRepository.ventas(id).find(filter);
  }

  @post('/clientes/{id}/ventas', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ventas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventas, {
            title: 'NewVentasInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) ventas: Omit<Ventas, 'id'>,
  ): Promise<Ventas> {
    return this.clienteRepository.ventas(id).create(ventas);
  }

  @patch('/clientes/{id}/ventas', {
    responses: {
      '200': {
        description: 'Cliente.Ventas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventas, {partial: true}),
        },
      },
    })
    ventas: Partial<Ventas>,
    @param.query.object('where', getWhereSchemaFor(Ventas)) where?: Where<Ventas>,
  ): Promise<Count> {
    return this.clienteRepository.ventas(id).patch(ventas, where);
  }

  @del('/clientes/{id}/ventas', {
    responses: {
      '200': {
        description: 'Cliente.Ventas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Ventas)) where?: Where<Ventas>,
  ): Promise<Count> {
    return this.clienteRepository.ventas(id).delete(where);
  }
}
