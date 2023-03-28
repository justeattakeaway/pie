const {
    AWS_DOCS_BUCKET,
    CI,
    GITHUB_REF_NAME,
    PIE_URL_PREFIX,
} = process.env;

/*
// This function is used to set the correct URL for WebDriverIO tests.
//
// local - http://localhost:8080/
// 'main' branch - Github Page - https://pie.design/
// Pull Request - GitHub Pages Preview URL - http://${AWS_DOCS_BUCKET}.s3-website.eu-west-1.amazonaws.com/pr-<pr-number>
// AWS_DOCS_BUCKET / PIE_URL_PREFIX - Set in GitHub Actions config.
*/
exports.getBaseUrl = () => {
    if (!CI) {
        return 'http://localhost:8080/';
    }
    if (GITHUB_REF_NAME === 'main') {
        return 'https://www.pie.design/';
    }
    return `http://${AWS_DOCS_BUCKET}.s3-website.eu-west-1.amazonaws.com/${PIE_URL_PREFIX}`;
};
