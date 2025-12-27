export type EachQuestionType = {
  question: string;
  answer: string;
};

export type QuestionType = {
  heading: string;
  questions: EachQuestionType[];
};
