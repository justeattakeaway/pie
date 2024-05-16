export default [{
    message: "What is the name of your new component? (Without the 'pie-' prefix e.g. 'form-label')",
    name: 'name',
    type: 'input',
},
{
    message: 'Does your web component need to be aware of text direction to render different markup or styles to support right-to-left languages?',
    name: 'needsRTL',
    type: 'confirm',
    default: false,
}];
