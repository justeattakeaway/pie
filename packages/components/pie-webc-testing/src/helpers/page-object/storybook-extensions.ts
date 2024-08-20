export const buildUrl = (componentName: string, path: string, args: string) => {
    const prNumber = process.env.PR_NUMBER;
    const baseURL = process.env.CI ? `https://pr${prNumber}-storybook.pie.design` : 'http://localhost:6006';

    let url = `${baseURL}/iframe.html?id=${componentName}${path}`;

    if (args) {
        url += `&args=${args}`;
    }

    return url;
};
