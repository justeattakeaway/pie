exports.getBaseUrl = () => {
    if (!process.env.CI) {
        return 'http://localhost:8080';
    } else if (process.env.GITHUB_REF_NAME === 'main') {
        return 'https://www.pie.design';
    } else if (process.env.GITHUB_REF_NAME !== 'main') {
        return process.env.PREVIEW_URL;
    }

    throw new Error('Unable to retrieve base url.');
};
