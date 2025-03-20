import { EFileType } from './file-type.enum';

export interface IFile {
  id: string;
  permaLink: string;
  type: EFileType;
}
