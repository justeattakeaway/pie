const commitlintPlugin = require('../../commitlint-plugin/index.js');

describe('commitlint-plugin-pie', () => {
    const { rules } = commitlintPlugin;
    const headerMatchRule = rules['match-pie-commit-pattern'];

    describe('match-pie-commit-pattern-', () => {
        it('should pass valid commit messages', () => {
            const validMessages = [
                'feat(pie-button): DSW-123 add new variant',
                'fix(pie-modal): DSW-456 resolve accessibility issue',
                'docs(pie-storybook): DSW-789 update component examples',
                'feat(pie-button): ABC-123 add new variant',
                'fix(pie-modal): JIRA-456 resolve accessibility issue',
                'docs(pie-storybook): ABC-789 update component examples',
            ];

            validMessages.forEach((message) => {
                const result = headerMatchRule({ header: message }, 'always');
                expect(result[0]).toBe(true);
            });
        });

        it('should fail invalid commit messages', () => {
            const invalidMessages = [
                '(pie-button): DSW-123 missing type',
                'feat: DSW-123 missing scope',
                'feat(pie-button): missing ticket',
                'feat(pie-button): DSW-000 invalid ticket',
                'feat(pie-button): ABC-000 invalid ticket',
            ];

            invalidMessages.forEach((message) => {
                const result = headerMatchRule({ header: message }, 'always');
                expect(result[0]).toBe(false);
                expect(result[1]).toContain('Invalid Commit Format');
            });
        });

        it('should handle never condition', () => {
            const result = headerMatchRule({ header: 'feat(pie-button): DSW-123 valid message' }, 'never');
            expect(result[0]).toBe(false);
            expect(result[1]).toBe('Header should not match team pattern');
        });
    });
});
