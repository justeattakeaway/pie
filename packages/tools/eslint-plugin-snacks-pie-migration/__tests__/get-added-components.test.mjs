// eslint-disable-next-line import/no-extraneous-dependencies
import { describe, expect, it } from 'vitest';
import getAddedComponents from '../lib/util/get-added-components';

describe('getAddedComponents', () => {
    it('lists the components added to a source code', () => {
        const sourceCodeBefore = 'import { FooBar } from \'snacks-design-system\';';
        const sourceCodeAfter = 'import { FooBar, Bar, Baz } from \'snacks-design-system\';';

        expect(getAddedComponents(sourceCodeBefore, sourceCodeAfter)).toEqual(['Bar', 'Baz']);
    });
    describe('when an item is removed', () => {
        it('lists the components added to a source code', () => {
            const sourceCodeBefore = 'import { FooBar } from \'snacks-design-system\';';
            const sourceCodeAfter = 'import { Bar, Baz } from \'snacks-design-system\';';

            expect(getAddedComponents(sourceCodeBefore, sourceCodeAfter)).toEqual(['Bar', 'Baz']);
        });
    });
    describe('when the import is multine', () => {
        it('lists the components added to a source code', () => {
            const sourceCodeBefore = 'import { FooBar } from \'snacks-design-system\';';
            const sourceCodeAfter = `import {
    FooBar,
    Bar,
    Baz
} from 'snacks-design-system';`;

            expect(getAddedComponents(sourceCodeBefore, sourceCodeAfter)).toEqual(['Bar', 'Baz']);
        });
    });
});
