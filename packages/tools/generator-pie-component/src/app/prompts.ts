export default [{
    message: "What's the name of your new component (without the 'pie-' prefix e.g. 'form-label')?",
    name: 'name',
    type: 'input',
},
{
    message: 'Does your web component need to be aware of text direction to render different markup or styes to support right-to-left languages?',
    name: 'needsRTL',
    type: 'confirm',
    default: false,
}];
