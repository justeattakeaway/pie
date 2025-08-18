export const buildUrl = (
    componentName: string,
    path: string,
    args: string,
    globals = '',
) => {
    const prNumber = process.env.PR_NUMBER;
    const branch = process.env.GITHUB_REF;

    let baseURL = 'http://localhost:6007';

    if (process.env.CI) {
        if (branch === 'refs/heads/main') {
            baseURL = 'https://webc-testing.pie.design';
        } else {
            baseURL = `https://pr${prNumber}-storybook-testing.pie.design`;
        }
    }

    let url = `${baseURL}/iframe.html?id=${componentName}${path || ''}`;

    if (args) {
        url += `&args=${args}`;
    }

    if (globals) {
        url += `&globals=${globals}`;
    }

    return url;
};

