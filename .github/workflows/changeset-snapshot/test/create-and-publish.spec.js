import { beforeEach, describe, expect, test, vi } from 'vitest';
import createAndPublish from '../create-and-publish';
import { Readable } from 'stream';

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
        await createAndPublish({ context, github }, execa);

        // Assert
        expect(github.rest.issues.createComment).toHaveBeenCalledTimes(1);
    });

    describe('if no packages were changed', () => {
        test('should have a message body starting with "No packages changed!"', async () => {
            // Arrange
            sampleOutput = '';

            // Act
            await createAndPublish({ context, github }, execa);

            // Assert
            expect(expectedBody.startsWith('No changed packages found!')).toBe(true);
        });
    });

    describe('if other packages were changed', () => {
        test('should ignore monorepo/docs/storybook changes', async () => {
            // Arrange
            sampleOutput = `
                New tag: pie-docs@0.0.0-snapshot-release-20231220110000
                New tag: pie-monorepo@0.0.0-snapshot-release-20231220110000
                New tag: pie-storybook@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await createAndPublish({ context, github }, execa);

            // Assert
            expect(expectedBody).toMatchSnapshot();
        });

        test('should ignore example app changes', async () => {
            // Arrange
            sampleOutput = `
                New tag: wc-vanilla@0.0.0-snapshot-release-20231220110000
                New tag: wc-next13@0.0.0-snapshot-release-20231220110000
            `;

            // Act
            await createAndPublish({ context, github }, execa);

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
            await createAndPublish({ context, github }, execa);

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
            await createAndPublish({ context, github }, execa);

            // Assert
            expect(expectedBody).toMatchSnapshot();
        });
    });
});
