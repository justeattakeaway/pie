const { execSync } = require('child_process');

const getPackages = () => {
  let outputPackages;

  try {
    // nitro is the server engine for nuxt3 and it generates an output folder
    // when the app builds. This folder has a package.json inside named nitro-output
    // which means this folder gets picked up every time we run run yarn cz
    outputPackages = execSync('npx turbo run build --dry=json --filter=!"./apps/examples/**"');
  } catch (error) {
    console.info('No changed packages found.');
    process.exit(0);
  }

  const packagesArray = JSON.parse(outputPackages.toString());

  return packagesArray.packages.map((packageName) => packageName.replace('@justeattakeaway/', ''));;
};

module.exports = {
  // We have to provide '\u0020' to some emojis due to a spacing bug with commitizen - https://github.com/commitizen/cz-cli/issues/815
  types: [
    { value: 'feat', name: '✨ feat: A new feature or functionality' },
    { value: 'fix', name: '🐛 fix: A bug fix' },
    { value: 'chore', name: '🧹 chore: Changes that affect the build system or external dependencies (e.g: typescript, webpack, eslint, package.json)' },
    { value: 'ci', name: '⚙️ \u0020ci: Changes to our CI configuration files and scripts' },
    { value: 'docs', name: '📚 docs: Documentation only changes' },
    { value: 'format', name: '💅 format: Changes that do not affect the meaning of the code (e.g: white-space, linting fixes etc)' },
    { value: 'performance', name: '🚀 performance: A code change that improves performance' },
    { value: 'refactor', name: '♻️ \u0020refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'release', name: '📦 release: Release of version' },
    { value: 'revert', name: '⏪ revert: Revert to a commit' },
    { value: 'cosmetic', name: '🎨 cosmetic: Changes that affect the UI styling (e.g: design tokens, images, Sass and SVGs)' },
    { value: 'test', name: '✅ test: Adding missing tests' },
    { value: 'wip', name: '🚧 wip: Work in progress' },
  ],

  scopes: [...getPackages()],
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:',
    body: '(optional) Provide a LONGER description of the change. Use "|" to break new line:',
    breaking: '(optional) List any BREAKING CHANGES:',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
  allowCustomScopes: false,
  skipQuestions: ['footer']
};
