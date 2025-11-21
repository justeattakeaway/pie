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
            command: mockExecaCommand,
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
