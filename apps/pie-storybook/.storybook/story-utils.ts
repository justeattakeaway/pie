import fs from 'fs';
import path from 'path';

const storiesDir = path.resolve(__dirname, '../stories');

export function getTestingStoryFiles(): string[] {
    const storyFiles: string[] = [];

    function readDirectory(directory: string) {
        const files = fs.readdirSync(directory);

        files.forEach(file => {
            const fullPath = path.join(directory, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                readDirectory(fullPath);
            } else if (file.endsWith('.stories.ts') || file.endsWith('.stories.tsx')) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                if (content.includes(`showInTestingDeployment: ${true}`)) {
                    storyFiles.push(fullPath);
                }
            }
        });
    }

    readDirectory(storiesDir);
    return storyFiles;
} 