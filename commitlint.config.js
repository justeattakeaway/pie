module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
    'type-enum': [
        2,
        'always',
            [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test',
            ],
        ],
    },
    prompt: {
      settings: {},
      messages: {
        skip: ':skip',
        max: 'upper %d chars',
        min: '%d chars at least',
        emptyWarning: 'can not be empty',
        upperLimitWarning: 'over limit',
        lowerLimitWarning: 'below limit'
      },
      questions: {
        type: {
          description: "Select the type of change that you're committing:",
          enum: {
            feat: {
              description: 'A new feature',
              title: 'Features',
            },
            fix: {
              description: 'A bug fix',
              title: 'Bug Fixes',
            },
            docs: {
              description: 'Documentation only changes',
              title: 'Documentation',
            },
            style: {
              description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
              title: 'Styles',
            },
            refactor: {
              description: 'A code change that neither fixes a bug nor adds a feature',
              title: 'Code Refactoring',
            },
            perf: {
              description: 'A code change that improves performance',
              title: 'Performance Improvements',
            },
            test: {
              description: 'Adding missing tests or correcting existing tests',
              title: 'Tests',
            },
            build: {
              description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
              title: 'Builds',
            },
            ci: {
              description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
              title: 'Continuous Integrations',
            },
            chore: {
              description: "Other changes that don't modify src or test files",
              title: 'Chores',
            },
            revert: {
              description: 'Reverts a previous commit',
              title: 'Reverts',
            },
          },
        },
        scope: {
          description:
            'What is the scope of this change (e.g. component or file name)',
        },
        subject: {
          description: 'Write a short, imperative tense description of the change',
        },
        body: {
          description: 'Provide a longer description of the change',
        },
        isBreaking: {
          description: 'Are there any breaking changes?',
        },
        breakingBody: {
          description:
            'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
        },
        breaking: {
          description: 'Describe the breaking changes',
        },
        isIssueAffected: {
          description: 'Does this change affect any open issues?',
        },
        issuesBody: {
          description:
            'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
        },
        issues: {
          description: 'Add issue references (e.g. "fix #123", "re #123".)',
        },
      },
    }
  };