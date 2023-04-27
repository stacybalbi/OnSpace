import { BaseEntity } from './BaseEntity.models';

export interface Portafolio extends BaseEntity {
  name: string;
  company: string;
  description: string;
  picture: string;
}
