export const buildUrl = (componentName: string, path: string, args: string) => {
    const prNumber = process.env.PR_NUMBER;
    const branch = process.env.GITHUB_REF;
    
    const baseURL = process.env.CI 
        ? branch === 'refs/heads/main'
            ? 'https://webc-testing.pie.design'
            : `https://pr${prNumber}-storybook-testing.pie.design`
        : 'http://localhost:6006';

    let url = `${baseURL}/iframe.html?id=${componentName}${path ? path : ''}`;

    if (args) {
        url += `&args=${args}`;
    }

    return url;
};
