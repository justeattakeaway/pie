import { Answers } from 'yeoman-generator';

export type TransformedName = {
  componentName: string;
  componentNameCamelCase: string;
  defaultName: string;
  fileName: string;
  displayName: string;
  percyComponentName: string;
}

export type Props = {
  answers: Answers;
  componentPath: string;
  storyPath: string;
} & TransformedName;
