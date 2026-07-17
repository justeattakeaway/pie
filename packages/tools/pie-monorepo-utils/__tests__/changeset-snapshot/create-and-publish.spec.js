import {
    beforeEach, describe, expect, test, vi,
} from 'vitest';

const { Readable } = require('stream');
const workflow = require('../../changeset-snapshot/create-and-publish');

let context;
let execa;
let expectedBody;
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

describe('create and publish workflow', () => {
    beforeEach(() => {
        sampleOutput = '';

        context = {
            actor: 'pie-contributor',
            issue: {
                number: 999,
            },
            repo: {
                owner: 'justeattakeaway',
                repo: 'pie',
            },
        };

        execa = {
            execaCommand: mockExecaCommand,
        };

        github = {
            rest: {
                issues: {
                    createComment: vi.fn().mockImplementation(({ body }) => {
                        expectedBody = body;
                    }),
                },
            },
        };
    });

    test('should create a github comment', async () => {
        // Act
        await workflow({ context, github }, execa);

        // Assert
        expect(github.rest.issues.createComment).toHaveBeenCalledTimes(1);
    });

    describe('if no packages were changed', () => {
        test('should have a message body starting with "No changed packages found!"', async () => {
            // Arrange
            sampleOutput = '';

            // Act
            await workflow({ context, github }, execa);

            // Assert
            expect(expectedBody).toBe('No changed packages found! Please make sure you have added a changeset entry for the packages you would like to snapshot.');
        });
    });

    describe('if other packages were changed', () => {
        test('should ignore monorepo/docs/storybook changes', async () => {
            // Arrange
            sampleOutput = `
                New tag: @justeattakeaway/pie-docs@0.0.0-snapshot-release-20231220110000
                New tag: pie-monorepo@0.0.0-snapshot-release-20231220110000
                New tag: @justeattakeaway/pie-storybook@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ context, github }, execa);

            // Assert
            expect(expectedBody).toMatchSnapshot();
        });
    });

    describe('when run with `--no-git-tag`', () => {
        test('should detect public packages from the npm publish success block, not "New tag:" lines', async () => {
            // Arrange: public packages only appear in the success block (no git tags),
            // while private packages still print "New tag:" lines and must be ignored.
            sampleOutput = `
                🦋  success packages published successfully:
                🦋  @justeattakeaway/pie-css@0.0.0-snapshot-release-20260604162742
                @justeattakeaway/pie-icons@0.0.0-snapshot-release-20260604162742
                🦋  success found untagged projects:
                🦋  @justeattakeaway/pie-docs@0.0.0-snapshot-release-20260604162742
                @justeattakeaway/pie-storybook@0.0.0-snapshot-release-20260604162742
                🦋  New tag:  @justeattakeaway/pie-docs@0.0.0-snapshot-release-20260604162742
                🦋  New tag:  @justeattakeaway/pie-storybook@0.0.0-snapshot-release-20260604162742
            `;

            // Act
            await workflow({ context, github }, execa);

            // Assert
            expect(expectedBody).toMatchSnapshot();
        });
    });

    describe('if a published package outside the @justeattakeaway namespace was changed', () => {
        test('should include @justeat scoped packages in the comment', async () => {
            // Arrange
            sampleOutput = `
                🦋  success packages published successfully:
                🦋  @justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ context, github }, execa);

            // Assert
            expect(expectedBody).toContain('@justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000');
        });

        test('should still match @justeattakeaway packages alongside @justeat ones', async () => {
            // Arrange
            sampleOutput = `
                🦋  success packages published successfully:
                🦋  @justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000
                🦋  @justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ context, github }, execa);

            // Assert
            expect(expectedBody).toContain('@justeat/pie-design-tokens@0.0.0-snapshot-release-20231220110000');
            expect(expectedBody).toContain('@justeattakeaway/pie-css@0.0.0-snapshot-release-20231220110000');
        });
    });

    describe('if exactly one component was changed', () => {
        test('should not include the note about multiple packages', async () => {
            // Arrange
            sampleOutput = `
                New tag: @justeattakeaway/pie-button@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ context, github }, execa);

            // Assert
            expect(expectedBody).toMatchSnapshot();
        });
    });

    describe('if more than one component was changed', () => {
        test('should include content related to multiple packages', async () => {
            // Arrange
            sampleOutput = `
                New tag: @justeattakeaway/pie-button@0.0.0-snapshot-release-20231220110000
                New tag: @justeattakeaway/pie-modal@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await workflow({ context, github }, execa);

            // Assert
            expect(expectedBody).toMatchSnapshot();
        });
    });
});
