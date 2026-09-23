const getInstanceCode = require('../get-instance-code');

function makeInstance (code) {
    return {
        type: 'INSTANCE',
        hasCodeConnect: () => true,
        executeTemplate: () => ({ example: [{ code }] }),
    };
}

describe('getInstanceCode', () => {
    describe('when the instance is invalid', () => {
        it('should return an empty string when instance is null', () => {
            expect(getInstanceCode(null)).toBe('');
        });

        it('should return an empty string when instance type is not INSTANCE', () => {
            const instance = { type: 'FRAME', hasCodeConnect: () => true, executeTemplate: () => ({ example: [] }) };
            expect(getInstanceCode(instance)).toBe('');
        });

        it('should return an empty string when instance has no Code Connect', () => {
            const instance = { type: 'INSTANCE', hasCodeConnect: () => false };
            expect(getInstanceCode(instance)).toBe('');
        });
    });

    describe('when the instance is valid', () => {
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
