const BRANCH_PREFIX = 'update-eslint-snacks-plugin';

function diffComponentData (stored, current) {
    const diff = {
        added: [],
        removed: [],
        statusChanged: [],
        snacksChanged: [],
    };

    const allKeys = new Set([...Object.keys(stored), ...Object.keys(current)]);

    allKeys.forEach((key) => {
        const inStored = stored[key];
        const inCurrent = current[key];

        if (!inStored) {
            diff.added.push({ snacksComponent: key, ...inCurrent });
        } else if (!inCurrent) {
            diff.removed.push({ snacksComponent: key, ...inStored });
        } else if (inStored.status !== inCurrent.status) {
            diff.statusChanged.push({
                snacksComponent: key,
                piePackage: inCurrent.piePackage,
                from: inStored.status,
                to: inCurrent.status,
            });
        } else if (inStored.piePackage !== inCurrent.piePackage) {
            diff.snacksChanged.push({
                snacksComponent: key,
                from: inStored.piePackage,
                to: inCurrent.piePackage,
                status: inCurrent.status,
            });
        }
    });

    return diff;
}

function formatPrBody (diff) {
    const sections = [];

    if (diff.added.length > 0) {
        const items = diff.added
            .map(({ snacksComponent, piePackage, status }) => `- \`${snacksComponent}\` → \`${piePackage}\` (${status})`)
            .join('\n');
        sections.push(`## Added\n\n${items}`);
    }

    if (diff.removed.length > 0) {
        const items = diff.removed
            .map(({ snacksComponent, piePackage }) => `- \`${snacksComponent}\` (was \`${piePackage}\`)`)
            .join('\n');
        sections.push(`## Removed\n\n${items}`);
    }

    if (diff.statusChanged.length > 0) {
        const items = diff.statusChanged
            .map(({
                snacksComponent, piePackage, from, to,
            }) => `- \`${snacksComponent}\` → \`${piePackage}\`: ${from} → **${to}**`)
            .join('\n');
        sections.push(`## Status Changes\n\n${items}`);
    }

    if (diff.snacksChanged.length > 0) {
        const items = diff.snacksChanged
            .map(({
                snacksComponent, from, to, status,
            }) => `- \`${snacksComponent}\` (${status}): \`${from}\` → \`${to}\``)
            .join('\n');
        sections.push(`## Package Changes\n\n${items}`);
    }

    return sections.join('\n\n');
}

module.exports = {
    BRANCH_PREFIX,
    diffComponentData,
    formatPrBody,
};
