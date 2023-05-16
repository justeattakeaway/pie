import { readFileSync, writeFileSync } from 'fs';

// removes react wrapper from index.ts after dist has built
export default function removeReactWrapper (customElementsObject) {
    let components = []
    let componentPath = ''
    let removedWrapper = ''
    const customElements = Object.entries(customElementsObject)

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        if ( key === 'modules') {
            return value.forEach(k => {
                k.declarations.forEach((decl) => {
                    decl.customElement === true ? components.push(decl) : ''
                    componentPath = k.path.replace('.js', '.ts')
                })
            })
        }
    })

    if (components.length > 0) {
        components.forEach(() => {
            const data = readFileSync(componentPath, { encoding: 'utf8', flag: 'r' })

            if (data.includes('import * as React')) {
                const fileData = data.split(`import * as React`)[0];
                removedWrapper = writeFileSync(componentPath, fileData);
            }
        })
    }

    return removedWrapper;
}
