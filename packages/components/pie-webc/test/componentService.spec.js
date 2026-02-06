import path from 'path';
import { ComponentService } from '../src/componentService';

describe('ComponentService', () => {
    let fsMock;
    let pathMock;
    let componentService;

    beforeEach(() => {
        fsMock = {
            existsSync: vi.fn(),
            mkdirSync: vi.fn(),
            readdirSync: vi.fn(),
            readFileSync: vi.fn(),
            writeFileSync: vi.fn(),
        };

        pathMock = {
            join: vi.fn(),
            resolve: vi.fn(),
            parse: vi.fn(),
        };

        pathMock.join.mockImplementation((...args) => args.join('/'));
        pathMock.resolve.mockImplementation((...args) => args.join('/'));
        pathMock.parse.mockImplementation(path.parse);

        // Suppress console output
        vi.spyOn(console, 'info').mockImplementation(() => {}); // eslint-disable-line @typescript-eslint/no-empty-function
    });

    describe('ensureDirectoryExists', () => {
        it('should create a directory if it does not exist', () => {
            // Arrange
            fsMock.existsSync.mockReturnValue(false);
            componentService = new ComponentService(fsMock, pathMock);

            // Act
            componentService.ensureDirectoryExists('dir');

            // Assert
            expect(fsMock.mkdirSync).toHaveBeenCalledWith('dir', { recursive: true });
        });

        it('should not create a directory if it already exists', () => {
            // Arrange
            fsMock.existsSync.mockReturnValue(true);
            componentService = new ComponentService(fsMock, pathMock);

            // Act
            componentService.ensureDirectoryExists('dir');

            // Assert
            expect(fsMock.mkdirSync).not.toHaveBeenCalled();
        });
    });

    describe('readAndPreparePackageJson', () => {
        it('should return the packageJson with empty exports and dependencies objects if they do not exist', () => {
            // Arrange
            fsMock.readFileSync.mockReturnValue('{}');
            componentService = new ComponentService(fsMock, pathMock);

            // Act
            const result = componentService.readAndPreparePackageJson('packageJsonPath');

            // Assert
            expect(result.exports).toEqual({});
            expect(result.dependencies).toEqual({});
        });

        it('should return the packageJson with existing exports and dependencies objects if they exist', () => {
            // Arrange
            fsMock.readFileSync.mockReturnValue('{"exports": {"exportKey": "exportValue"}, "dependencies": {"depKey": "depValue"}}');
            componentService = new ComponentService(fsMock, pathMock);

            // Act
            const result = componentService.readAndPreparePackageJson('/path/to/package.json');

            // Assert
            expect(result.exports).toEqual({ exportKey: 'exportValue' });
            expect(result.dependencies).toEqual({ depKey: 'depValue' });
        });
    });

    describe('verifyRootDirectory', () => {
        beforeEach(() => {
            pathMock.join.mockReturnValue('');
        });

        it('should throw an error if there is no package.json file in the working directory', () => {
            // Arrange
            fsMock.existsSync.mockReturnValue(false);
            componentService = new ComponentService(fsMock, pathMock);

            // Act & Assert
            const testFn = () => componentService.verifyRootDirectory('workingDir', 'expectedPackageName');
            expect(testFn).toThrowError('Please run this script from the root of the monorepo.');
        });

        it('should throw an error if the package.json does not match the expected name', () => {
            // Arrange
            fsMock.existsSync.mockReturnValue(true);
            fsMock.readFileSync.mockReturnValue('{"name": "wrongPackageName"}');
            componentService = new ComponentService(fsMock, pathMock);

            // Act & Assert
            const testFn = () => componentService.verifyRootDirectory('workingDir', 'expectedPackageName');
            expect(testFn).toThrowError('Incorrect package: Please run this script from the root of the monorepo.');
        });

        it('should not throw any errors if the package.json name matches the expected name', () => {
            // Arrange
            fsMock.existsSync.mockReturnValue(true);
            fsMock.readFileSync.mockReturnValue('{"name": "expectedPackageName"}');
            componentService = new ComponentService(fsMock, pathMock);

            // Act & Assert
            const testFn = () => componentService.verifyRootDirectory('workingDir', 'expectedPackageName');
            expect(testFn).not.toThrow();
        });
    });

    describe('createPackageJsonExports', () => {
        it('should return an object with exports for the component', () => {
            // Arrange
            componentService = new ComponentService(fsMock, pathMock);

            // Act
            const result = componentService.createPackageJsonExports('component-name');

            // Assert
            expect(result).toEqual({
                './components/component-name': {
                    import: './components/component-name.js',
                    require: './components/component-name.js',
                    types: './components/component-name.d.ts',
                },
                './components/component-name.js': {
                    import: './components/component-name.js',
                    require: './components/component-name.js',
                    types: './components/component-name.d.ts',
                },
                './react/component-name': {
                    import: './react/component-name.js',
                    require: './react/component-name.js',
                    types: './react/component-name.d.ts',
                },
                './react/component-name.js': {
                    import: './react/component-name.js',
                    require: './react/component-name.js',
                    types: './react/component-name.d.ts',
                },
            });
        });
    });

    describe('writeFilesForComponent', () => {
        it('should write the component files to the target directory', () => {
            // Arrange
            componentService = new ComponentService(fsMock, pathMock);
            const target = {
                dir: 'componentsTargetDir',
                exportPath: 'packageName',
            };

            // Act
            componentService.writeFilesForComponent('component-name', target);

            // Assert
            expect(fsMock.writeFileSync).toHaveBeenCalledWith('componentsTargetDir/component-name.js', "export * from 'packageName';\n");
            expect(fsMock.writeFileSync).toHaveBeenCalledWith('componentsTargetDir/component-name.d.ts', "export * from 'packageName';\n");
        });
    });

    describe('writePackageJson', () => {
        it('should write the stringified content to the specified path', () => {
            // Arrange
            componentService = new ComponentService(fsMock, pathMock);
            const packageJson = { name: 'package-name', version: '1.0.0' };

            // Act
            componentService.writePackageJson('path/to/package.json', packageJson);

            // Assert
            expect(fsMock.writeFileSync).toHaveBeenCalledWith('path/to/package.json', '{\n  "name": "package-name",\n  "version": "1.0.0"\n}\n');
        });
    });

    describe('processComponents', () => {
        let excludedFolders;
        let workingDir;

        beforeEach(() => {
            excludedFolders = [];
            workingDir = 'workingDir';

            fsMock.readFileSync.mockReturnValue('{"version": "1.1.1"}'); // Component package.json
            fsMock.readdirSync.mockReturnValue(['pie-component-name']); // Default, overridden by some tests
        });

        it('should ignore non-component folders', () => {
            // Arrange
            fsMock.readdirSync.mockReturnValue(['not-a-component']);
            componentService = new ComponentService(fsMock, pathMock);

            // Act
            componentService.processComponents(workingDir, excludedFolders, {});

            // Assert
            expect(fsMock.writeFileSync).not.toHaveBeenCalled();
        });

        it('should ignore excluded folders', () => {
            // Arrange
            fsMock.readdirSync.mockReturnValue(['pie-excluded']);
            componentService = new ComponentService(fsMock, pathMock);

            excludedFolders = ['pie-excluded'];

            // Act
            componentService.processComponents(workingDir, excludedFolders, {});

            // Assert
            expect(fsMock.writeFileSync).not.toHaveBeenCalled();
        });

        it('should add components as dependencies to the package.json', () => {
            // Arrange
            componentService = new ComponentService(fsMock, pathMock);
            const spy = vi.spyOn(componentService, 'writeFilesForComponent');

            // Act
            componentService.processComponents(workingDir, excludedFolders, { dependencies: {} });

            // Assert
            expect(spy).toHaveBeenCalledWith('component-name', {
                dir: 'workingDir/packages/components/pie-webc/components',
                exportPath: '@justeattakeaway/pie-component-name',
            });

            expect(spy).toHaveBeenCalledWith('component-name', {
                dir: 'workingDir/packages/components/pie-webc/react',
                exportPath: '@justeattakeaway/pie-component-name/dist/react.js',
            });
        });

        it('should add exports for each component to the package.json', () => {
            // Arrange
            componentService = new ComponentService(fsMock, pathMock);
            const rootPackageJson = { dependencies: {} };

            // Act
            const { exports } = componentService.processComponents(workingDir, excludedFolders, rootPackageJson);

            // Assert
            expect(Object.keys(exports)).toHaveLength(4);
            expect(Object.keys(exports)).toContain('./components/component-name');
            expect(Object.keys(exports)).toContain('./components/component-name.js');
            expect(Object.keys(exports)).toContain('./react/component-name');
            expect(Object.keys(exports)).toContain('./react/component-name.js');
            // Content of the exports object is tested in createPackageJsonExports
        });

        it('should preserve existing exports in the package.json', () => {
            // Arrange
            componentService = new ComponentService(fsMock, pathMock);
            const rootPackageJson = {
                dependencies: {},
                exports: {
                    './components/existing-component.js': {},
                    './react/existing-component.js': {},
                },
            };

            // Act
            const { exports } = componentService.processComponents(workingDir, excludedFolders, rootPackageJson);

            // Assert
            expect(Object.keys(exports)).toContain('./components/existing-component.js');
            expect(Object.keys(exports)).toContain('./react/existing-component.js');
            expect(Object.keys(exports)).toHaveLength(6);
        });

        it('should override existing exports in the package.json', () => {
            // Arrange
            componentService = new ComponentService(fsMock, pathMock);
            const rootPackageJson = {
                dependencies: {},
                exports: {
                    './components/component-name.js': {},
                    './react/component-name.js': {},
                },
            };

            // Act
            const { exports } = componentService.processComponents(workingDir, excludedFolders, rootPackageJson);

            // Assert
            expect(Object.keys(exports)).toContain('./components/component-name');
            expect(Object.keys(exports)).toContain('./components/component-name.js');
            expect(Object.keys(exports)).toContain('./react/component-name');
            expect(Object.keys(exports)).toContain('./react/component-name.js');
            expect(Object.keys(exports)).toHaveLength(4);
        });

        it('should preserve existing dependencies in the package.json', () => {
            // Arrange
            fsMock.readdirSync.mockReturnValue(['pie-new-component']);

            componentService = new ComponentService(fsMock, pathMock);
            const rootPackageJson = {
                dependencies: { '@justeattakeaway/pie-existing-component': '1.0.0' },
            };

            // Act
            const { dependencies } = componentService.processComponents(workingDir, excludedFolders, rootPackageJson);

            // Assert
            expect(dependencies).toEqual({
                '@justeattakeaway/pie-existing-component': '1.0.0',
                '@justeattakeaway/pie-new-component': '1.1.1',
            });
        });
    });
});
