// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import { parseAndGetImportedSpecifiers } from '../lib/util/parse-and-get-imported-specifiers';

describe('parseAndGetImportedSpecifiers', () => {
    describe('should return an empty array', () => {
        it('when file content is empty', () => {
            const fileContent = '';
            const result = parseAndGetImportedSpecifiers(fileContent);

            expect(result).toEqual([]);
        });

        it('when there are no imports from the package', () => {
            const fileContent = 'const foo = "bar";';
            const result = parseAndGetImportedSpecifiers(fileContent);

            expect(result).toEqual([]);
        });
    });

    it('should extract imported specifiers from snacks-design-system', () => {
        const fileContent = 'import { Button, Card } from "snacks-design-system";';
        const result = parseAndGetImportedSpecifiers(fileContent);

        expect(result).toEqual(['Button', 'Card']);
    });

    it('should extract imported specifiers from a different package when specified', () => {
        const fileContent = 'import { Component1, Component2 } from "custom-package";';
        const result = parseAndGetImportedSpecifiers(fileContent, 'custom-package');

        expect(result).toEqual(['Component1', 'Component2']);
    });

    it('should handle multiline imports', () => {
        const fileContent = `import {
    Button,
    Card,
    Input
} from 'snacks-design-system';`;
        const result = parseAndGetImportedSpecifiers(fileContent);

        expect(result).toEqual(['Button', 'Card', 'Input']);
    });

    it('should handle single import', () => {
        const fileContent = 'import { Button } from "snacks-design-system";';
        const result = parseAndGetImportedSpecifiers(fileContent);

        expect(result).toEqual(['Button']);
    });

    it('should handle multiple import statements from the same package', () => {
        const fileContent = `
import { Button } from 'snacks-design-system';
import { Card, Input } from 'snacks-design-system';
`;
        const result = parseAndGetImportedSpecifiers(fileContent);

        expect(result).toEqual(['Button', 'Card', 'Input']);
    });

    it('should ignore imports from other packages', () => {
        const fileContent = `
import { Button } from 'snacks-design-system';
import { Something } from 'other-package';
import { Card } from 'snacks-design-system';
`;
        const result = parseAndGetImportedSpecifiers(fileContent);

        expect(result).toEqual(['Button', 'Card']);
    });
});
