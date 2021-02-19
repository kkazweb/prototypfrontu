import {Question} from './question';
import {Answer} from './answer';

export interface Quiz {
  questionsHistory: Map<Answer, Question>;
  groupCodes: string[];
  questionList: Question[];
}

