// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// For regular size icons
export const regularIconSizeProp = {
    iconSize: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
};

export const regularIconSizeDefaultProp = {
    iconSize: 'm',
};

const largeIconMinimumSize = 32;
const largeIconModule = 8;

// For large icons
export const largeIconSizeProp = {
    iconSize: (props, propName, componentName) => {
        let error;
        const propValue = props[propName];
        const parsedValue = parseInt(propValue, 10) || largeIconMinimumSize;

        const sizeIsMultiple = parsedValue % largeIconModule === 0;
        const sizeIsInvalid = parsedValue < largeIconMinimumSize || !sizeIsMultiple;

        if (sizeIsInvalid) {
            error = new Error(`Invalid prop "${propName}" value supplied to "${componentName}". The prop value should be a number equal or greater than ${largeIconMinimumSize} and multiple of ${largeIconModule}.`);
        }

        return error;
    },
};
