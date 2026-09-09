const getImportStatement = require('../get-import-statement');

describe('getImportStatement', () => {
    const originalFramework = process.env.FRAMEWORK;

    afterEach(() => {
        process.env.FRAMEWORK = originalFramework;
    });

    describe('when FRAMEWORK is "react"', () => {
        beforeEach(() => {
            process.env.FRAMEWORK = 'react';
        });

        it('should return a named import from pie-webc/react/', () => {
            expect(getImportStatement('pie-button', 'PieButton'))
                .toBe("import { PieButton } from '@justeattakeaway/pie-webc/react/button.js'");
        });

        it('should strip the pie- prefix from the id', () => {
            expect(getImportStatement('pie-icon-button', 'PieIconButton'))
                .toBe("import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js'");
        });
    });

    describe('when FRAMEWORK is not "react"', () => {
        it('should return an import from pie-webc/components/ for web', () => {
            process.env.FRAMEWORK = 'web';
            expect(getImportStatement('pie-button', 'PieButton'))
                .toBe("import '@justeattakeaway/pie-webc/components/button.js';");
        });

        it('should return an import from pie-webc/components/ for vue', () => {
            process.env.FRAMEWORK = 'vue';
            expect(getImportStatement('pie-button', 'PieButton'))
                .toBe("import '@justeattakeaway/pie-webc/components/button.js';");
        });

        it('should strip the pie- prefix from the id', () => {
            process.env.FRAMEWORK = 'web';
            expect(getImportStatement('pie-icon-button', 'PieIconButton'))
                .toBe("import '@justeattakeaway/pie-webc/components/icon-button.js';");
        });
    });
});
