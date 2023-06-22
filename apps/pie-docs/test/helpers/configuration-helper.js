const { DOCS_AMPLIFY_ID, CI, PR_NUMBER, GITHUB_REF_NAME } = process.env;

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
        return 'https://pie.design/';
    }
    return `https://pr${PR_NUMBER}.${DOCS_AMPLIFY_ID}.amplifyapp.com/`;
};
