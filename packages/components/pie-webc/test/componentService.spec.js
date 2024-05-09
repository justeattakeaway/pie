import { ComponentService } from '../src/componentService';

describe('ComponentService', () => {
    let fsMock;
    let pathMock;
    let componentService;

    beforeEach(() => {
        fsMock = {
            existsSync: vi.fn(),
            readFileSync: vi.fn(),
            mkdirSync: vi.fn(),
            writeFileSync: vi.fn(),
        };

        pathMock = {
            join: vi.fn(),
        };
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
            const result = componentService.createPackageJsonExports('pie-component');

            // Assert
            expect(result).toEqual({
                './components/pie-component.js': {
                    import: './components/pie-component.js',
                    require: './components/pie-component.js',
                    types: './components/pie-component.d.ts',
                },
                './react/pie-component.js': {
                    import: './react/pie-component.js',
                    require: './react/pie-component.js',
                    types: './react/pie-component.d.ts',
                },
            });
        });
    });

    describe('writeFilesForComponent', () => {
        it('should write the component files to the target directory', () => {
            // Arrange
            pathMock.join.mockReturnValueOnce('path/to/file.js');
            pathMock.join.mockReturnValueOnce('path/to/file.d.ts');
            componentService = new ComponentService(fsMock, pathMock);
            const target = {
                dir: 'componentsTargetDir',
                exportPath: 'packageName',
            };

            // Act
            componentService.writeFilesForComponent('component-name', target);

            // Assert
            expect(fsMock.writeFileSync).toHaveBeenCalledWith('path/to/file.js', "export * from 'packageName';\n");
            expect(fsMock.writeFileSync).toHaveBeenCalledWith('path/to/file.d.ts', "export * from 'packageName';\n");
        });
    });
});
