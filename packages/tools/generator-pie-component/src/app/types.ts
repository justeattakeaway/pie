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
  [K in DependencyType]?: {
      [packageName: string]: string;
  };
};

export type DependencyType = 'dependencies' | 'devDependencies' | 'peerDependencies';

export type PackageJsonBase = {
  name?: string;
  version?: string;
  scripts?: { [scriptName: string]: string };
};

export type PackageJson = PackageJsonBase & Dependencies;

export type NpmRegistryResponse = {
  version: string;
};
