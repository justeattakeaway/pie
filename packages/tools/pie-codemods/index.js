const adapt = require('vue-jscodeshift-adapter');
const removeConsoleLog = require('./src/remove-consolelog.js');

module.exports = adapt(removeConsoleLog.default);