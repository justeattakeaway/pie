interface PackageJson {
    name: string;
    exports?: { [key: string]: string | { import: string; require: string; types: string } };
    dependencies?: { [key: string]: string };
}

export function verifyRootDirectory(workingDir: string, expectedPackageName: string, fs: typeof import('fs'), path: typeof import('path')): void;
export function ensureDirectoriesAndReadPackageJson(packageJsonPath: string, componentsTargetDir: string, reactTargetDir: string, fs: typeof import('fs'), path: typeof import('path')): PackageJson;
export function processComponents(sourceDir: string, excludedFolders: string[], packageJson: PackageJson, componentsTargetDir: string, reactTargetDir: string, fs: typeof import('fs'), path: typeof import('path')): void;
export function addComponentToPackage(folder: string, sourceDir: string, packageJson: PackageJson, componentsTargetDir: string, reactTargetDir: string, fs: typeof import('fs'), path: typeof import('path')): void;
export function createFilesForComponent(componentName: string, target: { dir: string; type: string; exportPath: string; }, fs: typeof import('fs'), path: typeof import('path'), packageJson: PackageJson): void;

declare function main(fs: typeof import('fs'), path: typeof import('path')): void;

export {};
