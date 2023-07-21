import { Answers } from 'yeoman-generator';

export type TransformedName = {
  componentName: string;
  defaultName: string;
  fileName: string;
  readmeName: string;
  percyComponentName: string;
}

export type Props = {
  answers: Answers;
  componentPath: string;
  storyPath: string;
} & TransformedName;
