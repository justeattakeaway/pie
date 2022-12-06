exports.getBaseUrl = () => {
    if (!process.env.CI) {
        return 'http://localhost:8080/';
    }
    const baseUrl = 'https://pie.design/';
    const path = process.env.GITHUB_REF_NAME !== 'main' ? process.env.PIE_URL_PREFIX : '/';

    return baseUrl + path;
};
