import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Articulos} from '../models';
import {ArticulosRepository} from '../repositories';

export class ArticulosController {
  constructor(
    @repository(ArticulosRepository)
    public articulosRepository : ArticulosRepository,
  ) {}

  @authenticate("admin")
  @post('/articulos')
  @response(200, {
    description: 'Articulos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Articulos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulos, {
            title: 'NewArticulos',
            exclude: ['id'],
          }),
        },
      },
    })
    articulos: Omit<Articulos, 'id'>,
  ): Promise<Articulos> {
    return this.articulosRepository.create(articulos);
  }

  @get('/articulos/count')
  @response(200, {
    description: 'Articulos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Articulos) where?: Where<Articulos>,
  ): Promise<Count> {
    return this.articulosRepository.count(where);
  }

  @authenticate.skip()
  @get('/articulos')
  @response(200, {
    description: 'Array of Articulos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Articulos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Articulos) filter?: Filter<Articulos>,
  ): Promise<Articulos[]> {
    return this.articulosRepository.find(filter);
  }

  @patch('/articulos')
  @response(200, {
    description: 'Articulos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulos, {partial: true}),
        },
      },
    })
    articulos: Articulos,
    @param.where(Articulos) where?: Where<Articulos>,
  ): Promise<Count> {
    return this.articulosRepository.updateAll(articulos, where);
  }


  @authenticate.skip()
  @get('/articulos/{id}')
  @response(200, {
    description: 'Articulos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Articulos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Articulos, {exclude: 'where'}) filter?: FilterExcludingWhere<Articulos>
  ): Promise<Articulos> {
    return this.articulosRepository.findById(id, filter);
  }

  @patch('/articulos/{id}')
  @response(204, {
    description: 'Articulos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Articulos, {partial: true}),
        },
      },
    })
    articulos: Articulos,
  ): Promise<void> {
    await this.articulosRepository.updateById(id, articulos);
  }

  @put('/articulos/{id}')
  @response(204, {
    description: 'Articulos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() articulos: Articulos,
  ): Promise<void> {
    await this.articulosRepository.replaceById(id, articulos);
  }

  @del('/articulos/{id}')
  @response(204, {
    description: 'Articulos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.articulosRepository.deleteById(id);
  }
}
