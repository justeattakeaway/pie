import {
    describe, it, expect,
} from 'vitest';
import {
    getTicketIdFromBranchName, validateBranchName, validatePrTitle,
} from '../../git-hooks/git-hooks-utils';

describe('getTicketIdFromBranchName', () => {
    describe('when called with an incompatible argument', () => {
        describe('when the argument is missing', () => {
            it('should throw an error', () => {
                const expected = new Error('A valid branch name wasn\'t provided');

                expect(() => getTicketIdFromBranchName(null)).toThrow(expected);
                expect(() => getTicketIdFromBranchName('')).toThrow(expected);
            });
        });
        describe('when the string doesnt have the expected format', () => {
            it('should return null', () => {
                const expected = null;

                expect(getTicketIdFromBranchName('random-string')).toBe(expected);
                expect(getTicketIdFromBranchName('jira000-branch-name')).toBe(expected);
                expect(getTicketIdFromBranchName('dsw-000-branch-name')).toBe(expected);
                expect(getTicketIdFromBranchName('jira-000-branch-name')).toBe(expected);
            });
        });
    });

    describe('when called with a valid argument', () => {
        it('should return the ticket id in upper case', () => {
            expect(getTicketIdFromBranchName('dsw-1234-branch-name')).toBe('DSW-1234');
            expect(getTicketIdFromBranchName('DSW-1234-BRANCH-NAME')).toBe('DSW-1234');
            expect(getTicketIdFromBranchName('abc-567-branch-name')).toBe('ABC-567');
            expect(getTicketIdFromBranchName('ABC-567-BRANCH-NAME')).toBe('ABC-567');
        });
    });
});

describe('validateBranchName', () => {
    describe('when called with an incompatible argument', () => {
        describe('when the string doesnt have the expected format', () => {
            it('should return false', () => {
                expect(validateBranchName('random-string')).toBe(false);
                expect(validateBranchName('dsw000-branch-name')).toBe(false);
                expect(validateBranchName('abc000-branch-name')).toBe(false);
            });
        });
    });

    describe('when called with a valid argument', () => {
        it('should return true', () => {
            expect(validateBranchName('main')).toBe(true);
            expect(validateBranchName('dsw-1234-branch-name')).toBe(true);
            expect(validateBranchName('DSW-1234-BRANCH-NAME')).toBe(true);
            expect(validateBranchName('abc-567-branch-name')).toBe(true);
            expect(validateBranchName('ABC-567-BRANCH-NAME')).toBe(true);
        });
    });
});

describe('validatePrTitle', () => {
    describe('when called with invalid arguments', () => {
        it('should return false for null/undefined', () => {
            expect(validatePrTitle(null)).toBe(false);
            expect(validatePrTitle(undefined)).toBe(false);
            expect(validatePrTitle('')).toBe(false);
        });

        it('should return false for invalid formats', () => {
            expect(validatePrTitle('invalid title')).toBe(false);
            expect(validatePrTitle('feat(scope): title')).toBe(false);
            expect(validatePrTitle('feat(scope): DSW-000 title')).toBe(false);
        });
    });

    describe('when called with valid arguments', () => {
        it('should return true for valid PR titles', () => {
            expect(validatePrTitle('feat(pie-button): DSW-123 title')).toBe(true);
            expect(validatePrTitle('fix(pie-button): DSW-456 fix bug')).toBe(true);
            expect(validatePrTitle('feat(pie-button): ABC-789 title')).toBe(true);
            expect(validatePrTitle('fix(pie-button): JIRA-101 fix bug')).toBe(true);
            expect(validatePrTitle('docs(pie-storybook): ABC-202 update docs')).toBe(true);
        });

        it('should return true for Version Packages', () => {
            expect(validatePrTitle('Version Packages')).toBe(true);
        });
    });
});

