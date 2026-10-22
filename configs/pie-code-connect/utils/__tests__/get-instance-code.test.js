const getInstanceCode = require('../get-instance-code');

function makeInstance (code) {
    return {
        type: 'INSTANCE',
        executeTemplate: () => ({ example: [{ code }] }),
    };
}

describe('getInstanceCode', () => {
    describe('when the instance is invalid', () => {
        it('should return an empty string when instance is null', () => {
            expect(getInstanceCode(null)).toBe('');
        });

        it('should return an empty string when instance type is not INSTANCE', () => {
            const instance = { type: 'FRAME', executeTemplate: () => ({ example: [] }) };
            expect(getInstanceCode(instance)).toBe('');
        });

        it('should return an empty string for an ERROR handle', () => {
            // `findInstance`/`findLayers` return an ERROR handle rather than null when nothing matches
            expect(getInstanceCode({ type: 'ERROR' })).toBe('');
        });
    });

    describe('when rendering fails', () => {
        it('should return an empty string when rendering the instance throws', () => {
            const instance = {
                type: 'INSTANCE',
                executeTemplate: () => {
                    throw new Error('boom');
                },
            };

            expect(getInstanceCode(instance)).toBe('');
        });

        it('should return an empty string when the transform throws', () => {
            // A throwing transform discards the rendered code rather than falling back to it
            const instance = makeInstance('<pie-button>Click</pie-button>');
            const transform = () => {
                throw new Error('boom');
            };

            expect(getInstanceCode(instance, transform)).toBe('');
        });
    });

    describe('when the instance is valid', () => {
        it('should render the instance even when it has no Code Connect mapping', () => {
            // The runtime resolves instances without a mapping itself, so they must not be dropped
            const instance = {
                type: 'INSTANCE',
                hasCodeConnect: () => false,
                executeTemplate: () => ({ example: [{ code: '<pie-button>Click</pie-button>' }] }),
            };

            expect(getInstanceCode(instance)[0].code).toBe('<pie-button>Click</pie-button>');
        });

        it('should return the code array unchanged when no transform is provided', () => {
            const instance = makeInstance('<pie-button>Click</pie-button>');
            const result = getInstanceCode(instance);
            expect(result[0].code).toBe('<pie-button>Click</pie-button>');
        });

        it('should insert a slot attribute when transform is a string', () => {
            const instance = makeInstance('<pie-icon size="xs" />');
            const result = getInstanceCode(instance, 'leadingIcon');
            expect(result[0].code).toBe('<pie-icon slot="leadingIcon" size="xs" />');
        });

        it('should apply a function transform to code[0].code', () => {
            const instance = makeInstance('<pie-button>Click</pie-button>');
            const transform = (str) => str.replace('Click', 'Submit');
            const result = getInstanceCode(instance, transform);
            expect(result[0].code).toBe('<pie-button>Submit</pie-button>');
        });
    });
});
