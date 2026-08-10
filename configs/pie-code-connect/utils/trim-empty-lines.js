function trimEmptyLines (string) {
    if (!string) return '';

    return string.split('\n')
        .filter((lineContent) => lineContent.trim())
        .join('\n');
}

module.exports = trimEmptyLines;
