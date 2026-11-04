import {
    beforeEach, describe, expect, test, vi,
} from 'vitest';

const { Readable } = require('stream');
const workflow = require('../../changeset-snapshot/test-aperture');
const snapitWorkflow = require('../../changeset-snapshot/create-and-publish');

let context;
let execa;
let github;
let sampleOutput = '';

const mockExecaCommand = () => {
    const mockStdoutStream = new Readable({
        read: () => {
            this.push(sampleOutput);
            this.push(null); // End the stream
        },
    });

    const mockProcess = {
        stdout: mockStdoutStream,
        then: (resolve) => {
            setTimeout(() => resolve({
                stdout: sampleOutput,
            }), 0);
            return this;
        },
    };

    mockStdoutStream.pipe = vi.fn().mockImplementation((destination) => destination);

    return mockProcess;
};

const dispatchedPackages = () => github.rest.repos.createDispatchEvent.mock.calls[0][0].client_payload['snapshot-packages'];

describe('test-aperture workflow', () => {
    beforeEach(() => {
        sampleOutput = '';

        context = {
            actor: 'pie-contributor',
            issue: { number: 999 },
            repo: { owner: 'justeattakeaway', repo: 'pie' },
        };

        execa = { execaCommand: mockExecaCommand };

        github = {
            rest: {
                repos: {
                    createDispatchEvent: vi.fn(),
                },
                issues: {
                    createComment: vi.fn(),
                },
            },
        };
    });

    describe('the snapshot comment', () => {
        const bothScopesPublished = `
            🦋  success packages published successfully:
            🦋  @justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000
            🦋  @justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000
        `;

        test('should list every published package, including @justeat scoped ones Aperture does not consume', async () => {
            // Arrange
            sampleOutput = bothScopesPublished;

            // Act
            await workflow({ github, context }, execa);

            // Assert
            const { body } = github.rest.issues.createComment.mock.calls[0][0]; // eslint-disable-line prefer-destructuring
            expect(body).toContain('@justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000');
            expect(body).toContain('@justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000');
        });

        test('should be identical to the comment /snapit posts for the same published packages', async () => {
            // Arrange
            sampleOutput = bothScopesPublished;

            // Act: run both workflows over the same publish output
            await workflow({ github, context }, execa);
            const apertureBody = github.rest.issues.createComment.mock.calls[0][0].body;

            github.rest.issues.createComment.mockClear();
            await snapitWorkflow({ github, context }, execa);
            const snapitBody = github.rest.issues.createComment.mock.calls[0][0].body;

            // Assert: both commands report the same published packages to the user
            expect(apertureBody).toBe(snapitBody);
        });
    });

    describe('the packages dispatched to Aperture', () => {
        test('should keep the @justeattakeaway scope', async () => {
            // Arrange
            sampleOutput = `
                🦋  success packages published successfully:
                🦋  @justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ github, context }, execa);

            // Assert
            expect(dispatchedPackages()).toBe('@justeattakeaway/pie-css');
        });

        test('should keep the @justeat scope rather than rewriting it to @justeattakeaway', async () => {
            // Arrange
            sampleOutput = `
                🦋  success packages published successfully:
                🦋  @justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ github, context }, execa);

            // Assert: rewriting the scope would dispatch a package that does not exist on npm
            expect(dispatchedPackages()).toBe('@justeat/pie-design-tokens');
        });

        test('should preserve each scope when both are published together', async () => {
            // Arrange
            sampleOutput = `
                🦋  success packages published successfully:
                🦋  @justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000
                🦋  @justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ github, context }, execa);

            // Assert
            expect(dispatchedPackages()).toBe('@justeat/pie-design-tokens @justeattakeaway/pie-css');
        });
    });

    describe('when something goes wrong', () => {
        const commentBodies = () => github.rest.issues.createComment.mock.calls.map(([{ body }]) => body);

        beforeEach(() => {
            vi.spyOn(console, 'error').mockImplementation(() => undefined);
        });

        test('should comment and fail the run when no changed packages are found', async () => {
            // Arrange
            sampleOutput = '🦋  warn No unpublished projects to publish';

            // Act
            const run = workflow({ github, context }, execa);

            // Assert
            await expect(run).rejects.toThrow('No changed packages found');
            expect(commentBodies()).toEqual([expect.stringContaining('No changed packages found')]);
            expect(github.rest.repos.createDispatchEvent).not.toHaveBeenCalled();
        });

        test('should comment and fail the run when publishing throws', async () => {
            // Arrange
            execa = { execaCommand: vi.fn().mockRejectedValue(new Error('npm publish failed')) };

            // Act
            const run = workflow({ github, context }, execa);

            // Assert
            await expect(run).rejects.toThrow('npm publish failed');
            expect(commentBodies()).toEqual([expect.stringContaining('npm publish failed')]);
            expect(github.rest.repos.createDispatchEvent).not.toHaveBeenCalled();
        });

        test('should still report the published snapshots, then comment and fail the run, when Aperture cannot be triggered', async () => {
            // Arrange
            sampleOutput = `
                🦋  success packages published successfully:
                🦋  @justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000
            `;
            github.rest.repos.createDispatchEvent.mockRejectedValue(new Error('Bad credentials'));

            // Act
            const run = workflow({ github, context }, execa);

            // Assert
            await expect(run).rejects.toThrow('Bad credentials');
            expect(commentBodies()).toEqual([
                expect.stringContaining('@justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000'),
                expect.stringMatching(/Failed to trigger PIE Aperture[\s\S]*Bad credentials/),
            ]);
        });
    });
});
