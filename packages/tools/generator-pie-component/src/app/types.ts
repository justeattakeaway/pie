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

export type Dependencies = {
  [key: string]: string;
};

export type DependencyType = 'dependencies' | 'devDependencies' | 'peerDependencies';

export type PackageJson = {
  name?: string;
  version?: string;
  dependencies?: Dependencies
  devDependencies?: Dependencies
  peerDependencies?: Dependencies
};

export type NpmRegistryResponse = {
  version: string;
};
