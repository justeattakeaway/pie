import { readdir } from "fs/promises";
import path from "path";

const getContent = async () => {
    const directory = './src/content/pages';
    let categories = (await readdir(directory, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

    let pagesArray = [];

    for(const category of categories) {
        let categoryPages = (await readdir(`${directory}/${category}`, { withFileTypes: true }))
        .filter(dirent => path.parse(dirent.name).name !== category)
        .map(dirent => path.parse(dirent.name).name);

        console.log('category Pages', categoryPages)
        pagesArray[category] = categoryPages;
    }

    return pagesArray;
}


export { getContent };
