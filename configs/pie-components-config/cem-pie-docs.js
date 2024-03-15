/* eslint-disable */

export default function cemPieDocs() {
    const typeArrayLiterals = {}
    const arrayLiteralToPropNameMap = {}
    const propsToType = {}
    const propsToJsDoc = {}

    /**
     * Look for Array Literals in the defs.ts files and set them in the closure state
     * e.g. typeArrayLiterals = { types: ['submit', 'button', 'reset'] }
     */
    const setArrayLiteralsValues = (ts, node) => {
        // Check for js const variables
        if(ts.isVariableDeclaration(node)){
            const variableName = node.name?.getText()
            typeArrayLiterals[variableName] = []
            // initializer expression is the value that initializes a variable when it is declared
            if(node.initializer && node.initializer.expression) {
                const expression = node.initializer.expression

                // Array Literal from where we construct union types
                if (ts.isArrayLiteralExpression(expression)) {
                    expression.elements.map(element => {
                        // each element of the array e.g. 'submit', 'button', 'reset'
                        if (ts.isStringLiteral(element)) {
                            typeArrayLiterals[variableName].push(element.text)
                        }
                    });
                }
            }
        }
    }

    /**
     * Map the prop name with the array literal const name, so we can map the
     * prop name to values of the array literal later. Set this map in the closure state.
     * e.g. arrayLiteralToPropNameMap = {size: sizes, type: types}
     */
    const mapPropToArrayLiteralName = (member, propName) => {
        const constName = member.type.objectType.exprName.escapedText
        arrayLiteralToPropNameMap[propName] = constName
    }

    const mapPropToType = (member, propName) => {
        const propType = member.type.getText() || member.type.typeName.getText()
        propsToType[propName] = propType
    }

    const mapProps = (ts, node) => {
        if (ts.isInterfaceDeclaration(node)) {
            const interfaceName = node.name?.getText()
            if (interfaceName.includes('Props')){
                // Members are the properties of the ts interface if kind InterfaceDeclaration
                node.members?.forEach(member => {
                    const propName = member.name?.getText();
                    if (ts.isIndexedAccessTypeNode(member.type)) {
                        mapPropToArrayLiteralName(member, propName)
                    } else {
                        mapPropToType(member, propName)
                    }
                    // map prop to jsdocs to add them later as description
                    propsToJsDoc[propName] = member.jsDoc[0].comment
                })
            }
        }
    }

    /**
     * Replaces the Type text in the manifest to use the actual union type
     * e.g. replaces the string ButtonProps['type'] with "submit | button | reset"
     */
    const replaceAttributeTypes = (attribute) => {
        const propName = arrayLiteralToPropNameMap[attribute.name]
        if (propName) {
            const propType = typeArrayLiterals[propName]
            attribute.type.text = propType.join(' | ')
        } else {
            attribute.type.text = propsToType[attribute.name]
        }
    }

    /**
     * These are the plugin lifecycle hooks. For more info:
     * https://custom-elements-manifest.open-wc.org/analyzer/plugins/authoring/#plugin-hooks-lifecycle
     *
     * We gather the information at collectPhase from the AST (ts variable)
     * and put it into the closure state.
     * In packageLinkPhase we mutate the manifest to update the Types of the component attributes
     */
    return {
        name: 'cem-pie-docs3',
        // Runs for all modules in a project, before continuing to the `analyzePhase`
        collectPhase({ts, node, context}){
            setArrayLiteralsValues(ts, node)
            mapProps(ts, node)
        },
        // Runs for each module
        analyzePhase({ts, node, moduleDoc, context}){},
        // Runs for each module, after analyzing, all information about your module should now be available
        moduleLinkPhase({moduleDoc, context}){
        },
        // Runs after modules have been parsed and after post-processing
        packageLinkPhase({customElementsManifest, context}){
            const componentModule = customElementsManifest.modules.find(module => module.path === 'src/index.js')
            const componentclass = componentModule.declarations.find(d => d.kind === 'class')
            componentclass?.attributes?.map(attribute => {
                replaceAttributeTypes(attribute)
                attribute.description = propsToJsDoc[attribute.name]
            })
            componentclass?.members?.map(member => {
                if (member.kind === 'field' && member.privacy === 'public') {
                    replaceAttributeTypes(member)
                    member.description = propsToJsDoc[member.name]
                }
            })
        },
    }
}

