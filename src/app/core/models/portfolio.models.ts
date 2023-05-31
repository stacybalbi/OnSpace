import { BaseEntity } from './BaseEntity.models';
import { Company } from './company.models';
import { Files } from './files.models';

export interface Portfolio extends BaseEntity {
  filesId: Files;
  companyId: Company;
  name: string;
  cover_page: string;
  description: string;
}
