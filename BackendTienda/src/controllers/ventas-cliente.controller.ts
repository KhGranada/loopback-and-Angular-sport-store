import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ventas,
  Cliente,
} from '../models';
import {VentasRepository} from '../repositories';

export class VentasClienteController {
  constructor(
    @repository(VentasRepository)
    public ventasRepository: VentasRepository,
  ) { }

  @get('/ventas/{id}/cliente', {
    responses: {
      '200': {
        description: 'Cliente belonging to Ventas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Cliente)},
          },
        },
      },
    },
  })
  async getCliente(
    @param.path.string('id') id: typeof Ventas.prototype.id,
  ): Promise<Cliente> {
    return this.ventasRepository.cliente(id);
  }
}
