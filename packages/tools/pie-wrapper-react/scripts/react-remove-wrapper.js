import { unlink, existsSync } from 'fs';

// removes react wrapper from index.ts after dist has built
export default function removeReactWrapper (customElementsObject) {
    let components = []
    let removedWrapper = ''
    const customElements = Object.entries(customElementsObject)

    // sort through customElements array and put all components into a separate array
    customElements.forEach(([key, value]) => {
        if ( key === 'modules') {
            return value.forEach(k => {
                k.declarations.forEach((decl) => {
                    decl.customElement === true ? components.push({class: decl, path: k.path.replace('index.js', 'react.ts')}) : ''
                })
            })
        }
    })

    if (components.length > 0) {
        components.forEach((component) => {
            const data = existsSync(component.path, { encoding: 'utf8', flag: 'r' })

            if (data) {
                unlink(component.path, (err) => {
                    if (err) throw err;
                })
            }
        })
    }

    return removedWrapper;
}
