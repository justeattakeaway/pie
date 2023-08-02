import { compileCss } from '../../../../utilities/compile-css';

const scssToTest = `
@use 'mixins';

:root {
  --font-size: 1.5rem;
}

.foo {
  @include mixins.font-size(--font-size);
}
`;

const expectedCss = `
:root {
  --font-size: 1.5rem;
}

.foo {
  font-size: calc(var(--font-size) * 1px);
}`;

async function go () {
    const css = compileCss(scssToTest);
    console.log(css);
    console.log(expectedCss);
    console.log(css.trim() === expectedCss.trim());
}

go();
