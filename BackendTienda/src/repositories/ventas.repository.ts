import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Ventas, VentasRelations, Cliente, Articulos} from '../models';
import {ClienteRepository} from './cliente.repository';
import {ArticulosRepository} from './articulos.repository';

export class VentasRepository extends DefaultCrudRepository<
  Ventas,
  typeof Ventas.prototype.id,
  VentasRelations
> {

  public readonly cliente: BelongsToAccessor<Cliente, typeof Ventas.prototype.id>;

  public readonly articulos: HasOneRepositoryFactory<Articulos, typeof Ventas.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('ArticulosRepository') protected articulosRepositoryGetter: Getter<ArticulosRepository>,
  ) {
    super(Ventas, dataSource);
    this.articulos = this.createHasOneRepositoryFactoryFor('articulos', articulosRepositoryGetter);
    this.registerInclusionResolver('articulos', this.articulos.inclusionResolver);
    this.cliente = this.createBelongsToAccessorFor('cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('cliente', this.cliente.inclusionResolver);
  }
}
