import { Company } from '../Company/companyDto.models';
import { Files } from '../Files/filesDto.models';

export interface Portfolio {
  filesId: Files;
  companyId: Company;
  name: string;
  cover_page: string;
  description: string;
  _company: string;
  _files: string;
}
