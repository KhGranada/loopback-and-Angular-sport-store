import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Articulos, ArticulosRelations} from '../models';

export class ArticulosRepository extends DefaultCrudRepository<
  Articulos,
  typeof Articulos.prototype.id,
  ArticulosRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Articulos, dataSource);
  }
}
