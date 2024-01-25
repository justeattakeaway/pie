import { localiseText, localiseRichText } from '../../src/localisation-utils';

describe('localiseText', () => {
    describe('given insuficient parameters it will throw', () => {
        it('when locale is empty', () => {
            // @ts-expect-error - Testing invalid input
            expect(() => localiseText(undefined, 'key')).toThrowError('"locale" parameter cannot be empty');
        });

        it('when key is empty', () => {
            // @ts-expect-error - Testing invalid input
            expect(() => localiseText({}, undefined)).toThrowError('"key" parameter cannot be empty');
        });
    });

    describe('given suficient parameters', () => {
        describe('when the key exists', () => {
            it('will return the value', () => {
                const locale = {
                    keyA: {
                        keyA1: 'valueA1',
                    },
                };

                // @ts-expect-error - Testing a generic input
                expect(localiseText(locale, 'keyA.keyA1')).toBe('valueA1');
            });
        });

        describe('when the key does not exist', () => {
            it('will return the key', () => {
                const locale = {
                    keyA: {
                        keyA1: 'valueA1',
                    },
                };

                // @ts-expect-error - Testing a generic input
                expect(localiseText(locale, 'keyA.keyA2')).toBe('keyA.keyA2');
            });
        });
    });
});

describe('localiseRichText', () => {
    describe('given insuficient parameters it will throw', () => {
        it('when locale is empty', () => {
            // @ts-expect-error - Testing invalid input
            expect(() => localiseRichText(undefined, 'key', {})).toThrowError('"locale" parameter cannot be empty');
        });

        it('when key is empty', () => {
            // @ts-expect-error - Testing invalid input
            expect(() => localiseRichText({}, undefined, {})).toThrowError('"key" parameter cannot be empty');
        });

        it('when customTagEnhancers is empty', () => {
            // @ts-expect-error - Testing invalid input
            expect(() => localiseRichText({}, 'key', undefined)).toThrowError('"customTagEnhancers" parameter cannot be empty');
        });
    });

    describe('given suficient parameters', () => {
        const locale = {
            element: {
                description: 'This paragraph has a <customTag>link</customTag> in it.',
            },
            anotherElement: {
                description: 'This is <anotherCustomTag>another custom tag</anotherCustomTag>.',
            },
        };

        const customTagEnhancers = {
            customTag: (content:string) => `<a href="https://www.example.com">${content}</a>`,
        };

        describe('when the key value has a matching customTag', () => {
            it('returns an array', () => {
                // @ts-expect-error - Testing a generic input
                const received = localiseRichText(locale, 'element.description', customTagEnhancers);

                expect(Array.isArray(received)).toEqual(true);
            });

            it('returns the expected content', () => {
                // @ts-expect-error - Testing a generic input
                const received = localiseRichText(locale, 'element.description', customTagEnhancers);

                expect(received.join('')).toBe('This paragraph has a <a href="https://www.example.com">link</a> in it.');
            });
        });

        describe('when the key value does not have a matching customTag', () => {
            it('returns the original content without any modification', () => {
                // @ts-expect-error - Testing a generic input
                const received = localiseRichText(locale, 'anotherElement.description', customTagEnhancers);

                expect(received.join('')).toBe('This is <anotherCustomTag>another custom tag</anotherCustomTag>.');
            });
        });
    });
});
