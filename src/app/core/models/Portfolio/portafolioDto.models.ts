import { Company } from "../Company/companyDto.models";
import { Files } from "../Files/filesDto.models";

export interface Portfolio{
  filesId: Files;
  companyId: Company;
  name: string;
  cover_page: string;
}
