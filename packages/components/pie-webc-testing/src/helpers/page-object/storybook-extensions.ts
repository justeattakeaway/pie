export const buildUrl = (componentName: string, path: string, args: string) => {
    const baseURL = 'http://localhost:6006';

    let url = `${baseURL}/iframe.html?id=${componentName}${path}`;

    if (args) {
        url += `&args=${args}`;
    }

    return url;
};
