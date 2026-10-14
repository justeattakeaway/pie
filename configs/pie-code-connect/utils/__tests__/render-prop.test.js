const renderProp = require('../render-prop');

describe('renderProp', () => {
    const originalFramework = process.env.FRAMEWORK;

    afterEach(() => {
        process.env.FRAMEWORK = originalFramework;
        vi.unstubAllGlobals();
    });

    it('should return an empty string when value equals the default value', () => {
        process.env.FRAMEWORK = 'web';
        expect(renderProp('size', 'medium', 'medium')).toBe('');
    });

    describe('web framework', () => {
        beforeEach(() => {
            process.env.FRAMEWORK = 'web';
        });

        it('should render boolean true as the attribute name', () => {
            expect(renderProp('disabled', true, false)).toBe('disabled');
        });

        it('should render boolean false as an empty string', () => {
            expect(renderProp('disabled', false, true)).toBe('');
        });

        it('should render a string value as a quoted attribute', () => {
            expect(renderProp('size', 'large', 'medium')).toBe('size="large"');
        });

        it('should render a number value as a quoted attribute', () => {
            expect(renderProp('size', 42, 0)).toBe('size="42"');
        });

        it('should render an array as a JSON single-quoted attribute', () => {
            expect(renderProp('items', ['a', 'b'], [])).toBe("items='[\"a\",\"b\"]'");
        });

        it('should render an object as a JSON single-quoted attribute', () => {
            expect(renderProp('config', { key: 'val' }, {})).toBe("config='{\"key\":\"val\"}'");
        });
    });

    describe('vue framework', () => {
        beforeEach(() => {
            process.env.FRAMEWORK = 'vue';
        });

        it('should render boolean true as the attribute name', () => {
            expect(renderProp('disabled', true, false)).toBe('disabled');
        });

        it('should render boolean false as an empty string', () => {
            expect(renderProp('disabled', false, true)).toBe('');
        });

        it('should render a string value as a quoted attribute', () => {
            expect(renderProp('size', 'large', 'medium')).toBe('size="large"');
        });

        it('should render a number value as a bound attribute', () => {
            expect(renderProp('size', 42, 0)).toBe(':size="42"');
        });

        it('should render an array as a bound vue literal', () => {
            expect(renderProp('items', ['a', 'b'], [])).toBe(":items=\"['a', 'b']\"");
        });

        it('should render an object as a bound vue literal', () => {
            expect(renderProp('config', { key: 'val' }, {})).toBe(":config=\"{ key: 'val' }\"");
        });
    });

    describe('react framework', () => {
        let mockRenderProp;

        beforeEach(() => {
            process.env.FRAMEWORK = 'react';
            mockRenderProp = vi.fn((name, val) => `${name}={${JSON.stringify(val)}}`);
            vi.stubGlobal('figma', { helpers: { react: { renderProp: mockRenderProp } } });
        });

        it('should delegate string values to figma.helpers.react.renderProp', () => {
            renderProp('size', 'large', 'medium');
            expect(mockRenderProp).toHaveBeenCalledWith('size', 'large');
        });

        it('should delegate boolean values to figma.helpers.react.renderProp', () => {
            renderProp('disabled', true, false);
            expect(mockRenderProp).toHaveBeenCalledWith('disabled', true);
        });

        it('should render an array as a JSX expression', () => {
            expect(renderProp('items', ['a', 'b'], [])).toBe('items={["a","b"]}');
        });

        it('should render an object as a double-braced JSX expression', () => {
            expect(renderProp('config', { key: 'val' }, {})).toBe('config={{key: "val"}}');
        });

        it('should render null as a NULL fallback via figma.helpers.react.renderProp', () => {
            renderProp('label', null, undefined);
            expect(mockRenderProp).toHaveBeenCalledWith('label', 'NULL');
        });
    });
});
