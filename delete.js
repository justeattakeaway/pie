import {
    TextLink, Button,
} from 'snacks-design-system';

function correctFooBar () {
    const foo = 'bar';
    return foo;
}

function incorrectFoo () {
    const foo = 'baz'; // Problem
    return foo;
}

correctFooBar();
incorrectFoo();
