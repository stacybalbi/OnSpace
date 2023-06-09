import { BaseEntity } from './BaseEntity.models';

export interface Company extends BaseEntity {
  name: string,
  description: string
}
