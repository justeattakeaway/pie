// eslint-disable-next-line @typescript-eslint/no-var-requires
const czConfig = require('./.cz-config.js');
const { TICKET_PATTERNS } = require('@justeattakeaway/pie-monorepo-utils/git-hooks/git-hooks-utils.js');

module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: [
        {
            rules: require('@justeattakeaway/pie-monorepo-utils/commitlint-plugin/index.js').rules
        }
    ],
    rules: {
        'type-enum': [2, 'always', czConfig.types.map((t) => t.value)],
        'scope-enum': [2, 'always', czConfig.scopes],
        'match-pie-commit-pattern': [2, 'always'],
        // Disable built-in rules that conflict with our custom validation
        'type-empty': [0, 'never'],
        'subject-empty': [0, 'never'],
        'references-empty': [0, 'never'],
    },
    parserPreset: {
        parserOpts: {
            headerPattern: TICKET_PATTERNS.COMMIT,
            headerCorrespondence: ['type', 'scope', 'ticket', 'subject'],
            referenceActions: null, // this stops commitlint erroring when using these words ['close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', 'resolved']
        },
    },
};
