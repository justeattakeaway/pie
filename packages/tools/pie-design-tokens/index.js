const fs = require('fs');
const mkdirp = require('mkdirp');
const jsonc = require('jsonc-parser');
const projectJson = require('./package.json');
const { buildGlobalTokensIntoThemes } = require('./build/helpers');
const compileToCss = require('./build/compileToCss');
const compileToScss = require('./build/compileToScss');
const compileToJson = require('./build/compileToJson');
const compileToXml = require('./build/compileToXml');

const rawJSONTokens = fs.readFileSync('pie-design-tokens.jsonc').toString();
const tokens = jsonc.parse(rawJSONTokens);

// Make dist directory (if it doesn't already exist)
mkdirp('dist').then(() => {
    // normalisedTokens takes the original token set and builds out an object in the structure:
    //
    // {
    //      android: { tokens }
    //      ios: { tokens }
    //      web: { tokens }
    // }
    //
    // The resulting `tokens` object for each platform will have transformed any special $platform values
    // ready for the compilation step to then consume. Tis also makes things more flexible in future should we ever
    // want to compile platform tokens out to other formats (i.e. web tokens to JSON for instance)

    const normalisedTokens = {
        android: buildGlobalTokensIntoThemes(tokens, 'android'),
        ios: buildGlobalTokensIntoThemes(tokens, 'ios'),
        web: buildGlobalTokensIntoThemes(tokens, 'web'),
    };

    // get the version number so it can be included in the output json
    const { version } = projectJson;

    // // 1. Build JSONC out to SCSS & CSS
    compileToScss(normalisedTokens.web);
    compileToCss(normalisedTokens.web);

    // // 2. Build JSONC out to standard JSON (replacing the alias tokens with values)
    compileToJson(normalisedTokens.ios, version);

    // // 3. Build JSONC out to XML (for Android)
    compileToXml(normalisedTokens.android);
});

// Next steps
// 1. Convert font-size and line-height into two separate values for the SCSS to consume
// 2. Discuss current JSON output with iOS and Skip to work out best way of cleaning up the JSONC
//    so that it can be used in apps and React as they want to
