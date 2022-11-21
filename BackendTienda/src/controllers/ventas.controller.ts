import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Ventas} from '../models';
import {VentasRepository} from '../repositories';

export class VentasController {
  constructor(
    @repository(VentasRepository)
    public ventasRepository : VentasRepository,
  ) {}

  @post('/ventas')
  @response(200, {
    description: 'Ventas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ventas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventas, {
            title: 'NewVentas',
            exclude: ['id'],
          }),
        },
      },
    })
    ventas: Omit<Ventas, 'id'>,
  ): Promise<Ventas> {
    return this.ventasRepository.create(ventas);
  }

  @get('/ventas/count')
  @response(200, {
    description: 'Ventas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ventas) where?: Where<Ventas>,
  ): Promise<Count> {
    return this.ventasRepository.count(where);
  }

  @get('/ventas')
  @response(200, {
    description: 'Array of Ventas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ventas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ventas) filter?: Filter<Ventas>,
  ): Promise<Ventas[]> {
    return this.ventasRepository.find(filter);
  }

  @patch('/ventas')
  @response(200, {
    description: 'Ventas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventas, {partial: true}),
        },
      },
    })
    ventas: Ventas,
    @param.where(Ventas) where?: Where<Ventas>,
  ): Promise<Count> {
    return this.ventasRepository.updateAll(ventas, where);
  }

  @get('/ventas/{id}')
  @response(200, {
    description: 'Ventas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ventas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Ventas, {exclude: 'where'}) filter?: FilterExcludingWhere<Ventas>
  ): Promise<Ventas> {
    return this.ventasRepository.findById(id, filter);
  }

  @patch('/ventas/{id}')
  @response(204, {
    description: 'Ventas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventas, {partial: true}),
        },
      },
    })
    ventas: Ventas,
  ): Promise<void> {
    await this.ventasRepository.updateById(id, ventas);
  }

  @put('/ventas/{id}')
  @response(204, {
    description: 'Ventas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ventas: Ventas,
  ): Promise<void> {
    await this.ventasRepository.replaceById(id, ventas);
  }

  @del('/ventas/{id}')
  @response(204, {
    description: 'Ventas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ventasRepository.deleteById(id);
  }
}
