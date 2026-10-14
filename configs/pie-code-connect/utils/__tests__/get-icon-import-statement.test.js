const getIconImportStatement = require('../get-icon-import-statement');

describe('getIconImportStatement', () => {
    it('should return a side-effect import for web', () => {
        expect(getIconImportStatement('IconClose', false))
            .toBe('import "@justeattakeaway/pie-icons-webc/dist/IconClose.js"');
    });

    it('should return a named import for React', () => {
        expect(getIconImportStatement('IconClose', true))
            .toBe('import { IconClose } from "@justeattakeaway/pie-icons-webc/dist/react/IconClose.js"');
    });

    it('should use the provided component name in the import path', () => {
        expect(getIconImportStatement('IconPlusCircle', false))
            .toBe('import "@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js"');

        expect(getIconImportStatement('IconPlusCircle', true))
            .toBe('import { IconPlusCircle } from "@justeattakeaway/pie-icons-webc/dist/react/IconPlusCircle.js"');
    });
});
