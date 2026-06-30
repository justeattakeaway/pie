import fs from 'fs';
import path from 'path';
import CopilotInstructionsGenerator from '../copilot-instructions/generator.js';
import targets from '../copilot-instructions/copilot-instructions.config.js';
import findMonorepoRoot from '../utils/find-monorepo-root.js';

export default async function copilotInstructionsDrift ({ danger, fail, flags }) {
    if (flags?.isAutomationPR) return;

    const changedFiles = [...danger.git.created_files, ...danger.git.modified_files];
    const generatorTouched = changedFiles.some((file) => file.includes('/copilot-instructions/'));

    const relevantTargets = targets.filter((target) => generatorTouched ||
        changedFiles.includes(target.source) ||
        changedFiles.includes(target.output));

    if (relevantTargets.length === 0) return;

    const root = findMonorepoRoot();
    const generator = new CopilotInstructionsGenerator({ fs, path, console });

    const staleTargets = relevantTargets.filter((target) => {
        const expected = generator.render(target, root);
        const outputPath = path.resolve(root, target.output);
        const current = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, 'utf8') : '';
        return current !== expected;
    });

    if (staleTargets.length > 0) {
        const list = staleTargets
            .map((target) => `- \`${target.output}\` (generated from \`${target.source}\`)`)
            .join('\n');
        fail(`🤖 Generated Copilot instructions are out of date:\n${list}\n\nRun \`yarn generate:copilot-instructions\` and commit the result.`);
    }
}
