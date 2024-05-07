import { verifyRootDirectory } from '../src/add-components.js';

describe('verifyRootDirectory', () => {
    let fsMock;
    let pathMock;

    beforeEach(() => {
        const existsSyncMock = vi.fn();
        const readFileSyncMock = vi.fn();

        fsMock = {
            existsSync: existsSyncMock,
            readFileSync: readFileSyncMock,
        };

        const joinMock = vi.fn();
        joinMock.mockReturnValue('./package.json');

        pathMock = {
            join: joinMock,
        };
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should throw an error if there is no package.json file in the working directory', () => {
        // Arrange
        fsMock.existsSync.mockReturnValue(false);

        // Act & Assert
        const testFn = () => verifyRootDirectory('workingDir', 'expectedPackageName', fsMock, pathMock);
        expect(testFn).toThrowError('Please run this script from the root of the monorepo.');
    });

    it('should throw an error if the package.json does not match the expected name', () => {
        // Arrange
        fsMock.existsSync.mockReturnValue(true);
        fsMock.readFileSync.mockReturnValue('{"name": "wrongPackageName"}');

        // Act & Assert
        const testFn = () => verifyRootDirectory('workingDir', 'expectedPackageName', fsMock, pathMock);
        expect(testFn).toThrowError('Incorrect package: Please run this script from the root of the monorepo.');
    });

    it('should not throw any errors if the package.json name matches the expected name', () => {
        // Arrange
        fsMock.existsSync.mockReturnValue(true);
        fsMock.readFileSync.mockReturnValue('{"name": "expectedPackageName"}');

        // Act & Assert
        const testFn = () => verifyRootDirectory('workingDir', 'expectedPackageName', fsMock, pathMock);
        expect(testFn).not.toThrow();
    });
});
