import { localiseText, localiseRichText, sanitiseDescriptionHtml } from '../../src/localisation-utils';

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

describe('sanitiseDescriptionHtml', () => {
    it('passes plain text through unchanged', () => {
        expect(sanitiseDescriptionHtml('Plain text with no HTML.')).toBe('Plain text with no HTML.');
    });

    it('preserves a safe <a> tag with href, rel and target', () => {
        const input = '<a href="https://example.com" rel="noopener noreferrer" target="_blank">link</a>';
        expect(sanitiseDescriptionHtml(input)).toBe(input);
    });

    it('preserves a safe <pie-link> tag with href, rel and target', () => {
        const input = '<pie-link href="https://example.com" rel="noopener noreferrer" target="_blank">link</pie-link>';
        expect(sanitiseDescriptionHtml(input)).toBe(input);
    });

    it('strips non-allowlisted attributes from <a>', () => {
        const input = '<a href="https://example.com" onclick="evil()" class="foo">link</a>';
        expect(sanitiseDescriptionHtml(input)).toBe('<a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>');
    });

    it('strips non-allowlisted attributes from <pie-link>', () => {
        const input = '<pie-link href="https://example.com" onclick="evil()" class="foo">link</pie-link>';
        expect(sanitiseDescriptionHtml(input)).toBe('<pie-link href="https://example.com" target="_blank" rel="noopener noreferrer">link</pie-link>');
    });

    it('strips javascript: href', () => {
        const input = '<a href="javascript:alert(1)">xss</a>';
        expect(sanitiseDescriptionHtml(input)).toBe('<a target="_blank" rel="noopener noreferrer">xss</a>');
    });

    it('strips data: href', () => {
        const input = '<a href="data:text/html,<script>alert(1)</script>">xss</a>';
        expect(sanitiseDescriptionHtml(input)).toBe('<a target="_blank" rel="noopener noreferrer">xss</a>');
    });

    it('strips vbscript: href', () => {
        const input = '<a href="vbscript:msgbox(1)">xss</a>';
        expect(sanitiseDescriptionHtml(input)).toBe('<a target="_blank" rel="noopener noreferrer">xss</a>');
    });

    it('strips non-anchor tags but keeps their text', () => {
        const input = 'See our <strong>privacy</strong> page.';
        expect(sanitiseDescriptionHtml(input)).toBe('See our privacy page.');
    });

    it('preserves <a> nested inside stripped tags', () => {
        const input = '<em>Read <a href="https://example.com">more</a> here</em>';
        expect(sanitiseDescriptionHtml(input)).toBe('Read <a href="https://example.com" target="_blank" rel="noopener noreferrer">more</a> here');
    });

    it('strips script tags and does not execute content', () => {
        const input = 'Hello <script>alert(1)</script> world';
        expect(sanitiseDescriptionHtml(input)).toBe('Hello  world');
    });

    it('strips invalid pie-link href values', () => {
        const input = '<pie-link href="javascript:alert(1)">xss</pie-link>';
        expect(sanitiseDescriptionHtml(input)).toBe('<pie-link target="_blank" rel="noopener noreferrer">xss</pie-link>');
    });

    it('strips all HTML when window is unavailable (SSR fallback)', () => {
        const originalWindow = globalThis.window;

        // @ts-expect-error - simulating SSR environment
        delete globalThis.window;

        try {
            const input = 'Read <a href="https://example.com" onclick="evil()">policy</a> <script>alert(1)</script>';
            expect(sanitiseDescriptionHtml(input)).toBe('Read policy alert(1)');
        } finally {
            globalThis.window = originalWindow;
        }
    });

    describe('anchor normalisation', () => {
        it('sets default target="_blank" when target is absent', () => {
            const input = '<a href="https://example.com">link</a>';
            expect(sanitiseDescriptionHtml(input)).toBe('<a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>');
        });

        it('sets default target="_blank" on pie-link when target is absent', () => {
            const input = '<pie-link href="https://example.com">link</pie-link>';
            expect(sanitiseDescriptionHtml(input)).toBe('<pie-link href="https://example.com" target="_blank" rel="noopener noreferrer">link</pie-link>');
        });

        it('sets provided linkTarget when target is absent', () => {
            const input = '<a href="https://example.com">link</a>';
            expect(sanitiseDescriptionHtml(input, '_self')).toBe('<a href="https://example.com" target="_self">link</a>');
        });

        it('sets provided linkTarget on pie-link when target is absent', () => {
            const input = '<pie-link href="https://example.com">link</pie-link>';
            expect(sanitiseDescriptionHtml(input, '_self')).toBe('<pie-link href="https://example.com" target="_self">link</pie-link>');
        });

        it('adds rel="noopener noreferrer" when target="_blank" and rel is absent', () => {
            const input = '<a href="https://example.com" target="_blank">link</a>';
            expect(sanitiseDescriptionHtml(input)).toBe('<a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>');
        });

        it('does not add rel when target is not _blank', () => {
            const input = '<a href="https://example.com" target="_self">link</a>';
            expect(sanitiseDescriptionHtml(input, '_self')).toBe('<a href="https://example.com" target="_self">link</a>');
        });

        it('preserves existing rel when target="_blank"', () => {
            const input = '<a href="https://example.com" target="_blank" rel="noopener">link</a>';
            expect(sanitiseDescriptionHtml(input)).toBe('<a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>');
        });

        it('enforces the provided linkTarget when target is already present', () => {
            const input = '<a href="https://example.com" target="_blank">link</a>';
            expect(sanitiseDescriptionHtml(input, '_self')).toBe('<a href="https://example.com" target="_self">link</a>');
        });

        it('adds missing noreferrer when target="_blank" has a partial rel value', () => {
            const input = '<a href="https://example.com" target="_blank" rel="noopener">link</a>';
            expect(sanitiseDescriptionHtml(input)).toBe('<a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a>');
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
