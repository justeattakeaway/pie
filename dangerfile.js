import { danger, fail } from 'danger';
import { checks } from '@justeattakeaway/pie-monorepo-utils/dangerjs-checks/index.js';

const { pr } = danger.github;
const flags = {
    isAutomationPR: pr.user.type === 'Bot',
    isDependabotPR: pr.user.login === 'dependabot[bot]',
};

(async () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const check of checks) {
        // eslint-disable-next-line no-await-in-loop
        await check({
            danger,
            fail,
            pr,
            flags,
        });
    }
})();
