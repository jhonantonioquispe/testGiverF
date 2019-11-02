import { Question } from './question';
import { Test } from './test';
import { Option } from './option';
import { Attachment } from './attachment';

export class Models {
  Question = Question;
  Test=Test;
  Option=Option;
  Attachment=Attachment;  
}

export interface IFilterParams {
  filterObject:any,
  model:any,
  getFilterParams: () => string
};