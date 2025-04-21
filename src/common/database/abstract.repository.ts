import { AbstractEntity } from './abstract.entity';
import { Logger, NotFoundException } from '@nestjs/common';
import { paginate } from 'nestjs-typeorm-paginate';
import {
  EntityManager,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { AbstractFindAllDto } from '../dto/abstract-find-all.dto';

export abstract class AbstractRepository<T extends AbstractEntity<T>> {
  protected abstract readonly logger: Logger;
  protected readonly tableName: string;

  constructor(
    private readonly entityRepository: Repository<T>,
    private readonly entityManager: EntityManager,
  ) {
    const tableName = entityRepository.metadata.tableName;
    this.tableName = tableName.charAt(0).toUpperCase() + tableName.slice(1);
  }

  // buat create instance baru yang entity manager dari database transaction
  factory(entityManager: EntityManager): this {
    const repository = entityManager.getRepository<T>(
      this.entityRepository.target,
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return new (this.constructor as any)(repository, entityManager);
  }

  // buat validasi sebelum create
  async beforeCreate(entity: T) {}

  async create(entity: Partial<T>): Promise<T> {
    await this.beforeCreate(entity as T);

    const entityInstance = this.entityRepository.create(entity as T);
    return this.entityManager.save(entityInstance);
  }

  async findOne(
    where: FindOptionsWhere<T>,
    options: {
      relations?: FindOptionsRelations<T>;
      throwWhenNotFound?: boolean;
    } = {},
  ) {
    const { relations, throwWhenNotFound = true } = options;

    const entity = await this.entityRepository.findOne({ where, relations });

    if (!entity && throwWhenNotFound) {
      this.logger.warn(`${this.tableName} not found with where`, where);
      throw new NotFoundException(`${this.tableName} not found`);
    }

    return entity;
  }

  // buat validasi sebelum update
  async beforeUpdate(entity: T) {}

  async findOneAndUpdate(
    where: FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ) {
    await this.beforeUpdate(partialEntity as T);

    const updateResult = await this.entityRepository.update(
      where,
      partialEntity,
    );

    if (!updateResult.affected) {
      this.logger.warn(`${this.tableName} not found with where`, where);
      throw new NotFoundException(`${this.tableName} not found`);
    }

    return this.findOne(where);
  }

  async find(where: FindOptionsWhere<T>): Promise<T[]> {
    return this.entityRepository.findBy(where);
  }

  async findOneAndDelete(where: FindOptionsWhere<T>) {
    const deleteResult = await this.entityRepository.delete(where);

    if (!deleteResult.affected) {
      this.logger.warn(`${this.tableName} not found with where`, where);
      throw new NotFoundException(`${this.tableName} not found`);
    }

    return !!deleteResult.affected;
  }

  async findAll(findAllDto: AbstractFindAllDto) {
    const page = findAllDto?.page || 1;
    const limit = findAllDto?.limit || 10;

    const queryBuilder = this.selectFindAll(findAllDto);
    return await paginate<T>(queryBuilder, { page, limit });
  }

  // kalau mau join"an override method ini
  // kalau ada property tambahan di dto nya, type nya pakai yang itu aja
  // misalnya ada property "type_id" di dto SilabusFindAllDto
  // biar bisa query where
  selectFindAll(findAllDto: AbstractFindAllDto) {
    return this.entityRepository.createQueryBuilder();
  }

  // TODO: autocomplete method
  async firstOrCreate(
    where: FindOptionsWhere<T>,
    data: Partial<T>,
  ): Promise<T> {
    const entity = await this.findOne(where, { throwWhenNotFound: false });

    if (entity) {
      return entity;
    }

    return this.create(data);
  }
}
