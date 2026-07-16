// compare the jsonc file against a csv export of the PIE color alias tokens spread sheet
// https://docs.google.com/spreadsheets/d/1KRVJgMELOA-QkKuqNZh-9z4kpQe__diuRhjIRLxNR1Q/edit#gid=96422113

const fs = require('fs');
const jsonc = require('jsonc-parser');

const rawJSONTokens = fs.readFileSync('pie-design-tokens.jsonc').toString();
const tokens = jsonc.parse(rawJSONTokens);

// read in the csv
const rawCsv = fs.readFileSync('csv_export.csv').toString();
let lines = rawCsv.split('\n').filter(Boolean);

// drop first 5 lines
for (let i = 0; i < 5; i++) {
    lines.shift();
}

// strip any other lines which don't have colors
lines = lines.filter((item) => !item.includes(',,,,,,,,'));

// Return array of string values, or NULL if CSV string not well formed.
function CSVtoArray (text) {
    const regexValid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    const regexValue = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;

    // Return NULL if input string is not well formed CSV string.
    if (!regexValid.test(text)) return null;

    const a = []; // Initialize array to receive values.
    text.replace(regexValue, (m0, m1, m2, m3) => {
        // Remove backslash from \' in single quoted values.
        if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));

        // Remove backslash from \" in double quoted values.
        else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
        else if (m3 !== undefined) a.push(m3);
        return ''; // Return empty string.
    });

    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
}

// indices of columns in the CSV
const nameIdx = 0;
const replacementNameIdx = 1;
const skipLightToken = 3;
const skipDarkToken = 6;
const jetLightToken = 9;
const jetDarkToken = 12;

// the keys for the brand and theme so the color themes can be fetched
const jet = 'jet';
const skip = 'skip';
const light = 'default';
const dark = 'dark';

function colors (brand, theme) {
    return tokens.theme[brand].color.alias[theme];
}

function dropColorPrefix (color) {
    if (color.includes('$color-')) {
        return color.substring(7);
    }
    return color;
}

function dropNamePrefix (name) {
    if (name[0] === '$') {
        return name.substring(1);
    }
    return name;
}

const jetL = colors(jet, light);
const jetD = colors(jet, dark);
const skipL = colors(skip, light);
const skipD = colors(skip, dark);

const allKeys = [jetL, jetD, skipL, skipD].map((i) => Object.keys(i)).flat();

const encountered = [];

lines.forEach((line) => {
    const items = CSVtoArray(line);

    let name = items[replacementNameIdx] ? items[replacementNameIdx] : items[nameIdx];
    name = dropNamePrefix(name);
    encountered.push(name);

    const slA = dropColorPrefix(items[skipLightToken]);
    const sdA = dropColorPrefix(items[skipDarkToken]);
    const jlA = dropColorPrefix(items[jetLightToken]);
    const jdA = dropColorPrefix(items[jetDarkToken]);

    const slB = skipL[name];
    const sdB = skipD[name];
    const jlB = jetL[name];
    const jdB = jetD[name];

    if ((slA !== slB) || (sdA !== sdB) || (jlA !== jlB) || (jdA !== jdB)) {
        // eslint-disable-next-line no-console
        console.log(`[
    ${name}
    jet  Light: ${jlB} => ${jlA}
    jet  dark:  ${jdB} => ${jdA}
    skip light: ${slB} => ${slA}
    skip dark:  ${sdB} => ${sdA}
]`);
    }
});

const a = new Set(encountered);
const b = new Set(allKeys);

// print any color keys in the csv but not in the jsonc
const difference = new Set([...a].filter((x) => !b.has(x)));
// eslint-disable-next-line no-console
console.log(difference);

// print any color keys in the jsonc but not in the csv
const differenceB = new Set([...b].filter((x) => !a.has(x)));
// eslint-disable-next-line no-console
console.log(differenceB);

