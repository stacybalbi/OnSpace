import { BaseEntity } from './BaseEntity.models';
import { Company } from './company.models';

export interface Files extends BaseEntity {
  companyId: Company;
  name: string;
  img: string;
}
