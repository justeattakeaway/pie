export default [{
    message: "What's the name of your new component (without the 'pie-' prefix e.g. 'form-label')?",
    name: 'name',
    type: 'input',
},
{
    message: 'Does your web component need to recognise \'dir\' attributes to render different markup or styes to support RTL?',
    name: 'needsRTL',
    type: 'confirm',
    default: false,
}];
