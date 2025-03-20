import { Entity } from '@project/core';
import { ITag } from '@project/types';

export class BlogTagEntity implements ITag, Entity<string> {
  public id!: string;
  public name!: string;

  constructor(tag: ITag) {
    this.populate(tag);
  }

  public populate(data: ITag): void {
    this.id = data.id;
    this.name = data.name;
  }

  public toPOJO() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
