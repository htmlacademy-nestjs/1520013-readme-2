import { randomUUID } from 'node:crypto';
import { Entity, EntityIdType } from '../entity';
import { Repository } from './repository.interface';

export abstract class BaseMemoryRepository<T extends Entity<EntityIdType>>
  implements Repository<T>
{
  #entities: Map<T['id'], T> = new Map();

  get entities() {
    return this.#entities;
  }

  async findById(id: T['id']): Promise<T> {
    return this.entities.get(id) || null;
  }

  async save(entity: T): Promise<T> {
    if (!entity.id) {
      entity.id = randomUUID();
    }

    this.entities.set(entity.id, entity);
    return entity;
  }

  async update(id: T['id'], entity: T): Promise<T> {
    if (!this.entities.has(id)) {
      throw new Error(`Entity with id ${id} does not exist`);
    }

    this.entities.set(id, { ...entity, id });
    return entity;
  }

  async deleteById(id: T['id']): Promise<void> {
    if (!this.entities.has(id)) {
      throw new Error(`Entity with id ${id} does not exist`);
    }

    this.entities.delete(id);
  }
}
