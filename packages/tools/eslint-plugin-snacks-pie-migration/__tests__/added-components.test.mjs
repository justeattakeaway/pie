// eslint-disable-next-line import/no-extraneous-dependencies
import {
    describe, it, expect, vi, beforeEach,
} from 'vitest';

import { addedComponentsPostprocessor } from '../lib/util/added-components-postprocessor';

describe('added-components processor', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        vi.clearAllMocks();
    });

    describe('postprocess', () => {
        it('should filter out deprecated component errors that were not added', () => {
            // Arrange
            const filePath = 'test-file.js';
            const messages = [[
                {
                    message: 'The Snacks component "Button" is being deprecated',
                    ruleId: '@justeattakeaway/snacks-pie-migration/deprecated-components',
                },
            ]];

            const mockConfig = {
                isFileNew: () => false,
                getFileStateFromBranch: () => 'import { Button } from "snacks-design-system"',
                readFileSync: () => 'import { Button } from "snacks-design-system"',
            };

            // Act
            const result = addedComponentsPostprocessor(messages, filePath, mockConfig);

            // Assert
            expect(result).toHaveLength(0); // Component wasn't added, so error should be filtered out
        });

        it('should keep deprecated component errors for newly added components', () => {
            // Arrange
            const filePath = 'test-file.js';
            const messages = [[
                {
                    message: 'The Snacks component "Button" is being deprecated',
                    ruleId: '@justeattakeaway/snacks-pie-migration/deprecated-components',
                },
            ]];

            const mockConfig = {
                isFileNew: () => false,
                getFileStateFromBranch: () => 'import { Modal } from "snacks-design-system"',
                readFileSync: () => 'import { Modal, Button } from "snacks-design-system"',
            };

            // Act
            const result = addedComponentsPostprocessor(messages, filePath, mockConfig);

            // Assert
            expect(result).toHaveLength(1); // Component was added, so error should remain
        });

        it('should handle new files that have not been committed', () => {
            // Arrange
            const filePath = 'test-file.js';
            const messages = [[
                {
                    message: 'The Snacks component "Button" is being deprecated',
                    ruleId: '@justeattakeaway/snacks-pie-migration/deprecated-components',
                },
            ]];

            const mockConfig = {
                isFileNew: () => true,
                getFileStateFromBranch: () => '',
                readFileSync: () => 'import { Button } from "snacks-design-system"',
            };

            // Act
            const result = addedComponentsPostprocessor(messages, filePath, mockConfig);

            // Assert
            expect(result).toHaveLength(1); // New file with component should keep the error
        });

        it('should not filter non-deprecated-component errors', () => {
            // Arrange
            const filePath = 'test-file.js';
            const messages = [[
                {
                    message: 'Some other error',
                    ruleId: 'some-other-rule',
                },
            ]];

            const mockConfig = {
                isFileNew: () => true,
                getFileStateFromBranch: () => '',
                readFileSync: () => 'import { Button } from "snacks-design-system"',
            };

            // Act
            const result = addedComponentsPostprocessor(messages, filePath, mockConfig);

            // Assert
            expect(result).toHaveLength(1); // Other errors should always remain
        });
    });
});
