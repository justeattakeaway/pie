import {
    describe, it, expect,
} from 'vitest';
import {
    getTicketIdFromBranchName, validateBranchName, verifyCommitMessage,
} from '../git-hooks-utils';

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
            it('should return null ', () => {
                const expected = null;

                expect(getTicketIdFromBranchName('random-string')).toBe(expected);
                expect(getTicketIdFromBranchName('jira000-branch-name')).toBe(expected);
            });
        });
    });

    describe('when called with a valid argument', () => {
        it('should return the ticket id in upper case', () => {
            const expected = 'JIRA-1234';

            expect(getTicketIdFromBranchName('jira-1234-branch-name')).toBe(expected);
            expect(getTicketIdFromBranchName('JIRA-1234-BRANCH-NAME')).toBe(expected);
        });
    });
});

describe('validateBranchName', () => {
    describe('when called with an incompatible argument', () => {
        describe('when the string doesnt have the expected format', () => {
            it('should return false', () => {
                expect(validateBranchName('random-string')).toBe(false);
                expect(validateBranchName('jira000-branch-name')).toBe(false);
            });
        });
    });

    describe('when called with a valid argument', () => {
        it('should return true', () => {
            expect(validateBranchName('jira-1234-branch-name')).toBe(true);
            expect(validateBranchName('JIRA-1234-BRANCH-NAME')).toBe(true);
        });
    });
});

describe('verifyCommitMessage', () => {
    describe('when called with an incompatible argument', () => {
        describe('when the arguments are missing', () => {
            it('should throw an error', () => {
                expect(() => verifyCommitMessage(undefined, 'JIRA-1234'))
                    .toThrow(new Error('The commitMessage wasn\'t provided'));
                expect(() => verifyCommitMessage('a commit message', undefined))
                    .toThrow(new Error('The ticketId wasn\'t provided'));
            });
        });
        describe('when the commit message doesnt have the expected format', () => {
            it('should throw an error', () => {
                expect(() => verifyCommitMessage('a commit message', 'JIRA-1234'))
                    .toThrow(new Error('The commitMessage doesn\'t have the expected format. Example: type(scope): DSW-123 title'));
            });
        });
    });

    describe('when called with a valid argument', () => {
        describe('when the commit message doesnt have a ticket id', () => {
            it('should return the commit message with the ticket id', () => {
                const expected = 'feat(package-name): JIRA-1234 commit message';
                const received = verifyCommitMessage('feat(package-name): commit message', 'JIRA-1234');

                expect(received).toBe(expected);
            });
        });

        describe('when the commit message has a ticket id different from the one provided as argument', () => {
            it('should return the commit message with the ticket id', () => {
                const expected = 'feat(package-name): JIRA-1234 commit message';
                const received = verifyCommitMessage('feat(package-name): DSW-0 commit message', 'JIRA-1234');

                expect(received).toBe(expected);
            });
        });

        describe('when the commit message a ticket id equal to the one provided as argument', () => {
            it('should return the commit message with the ticket id', () => {
                const expected = 'feat(package-name): JIRA-1234 commit message';
                const received = verifyCommitMessage('feat(package-name): JIRA-1234 commit message', 'JIRA-1234');

                expect(received).toBe(expected);
            });
        });
    });
});
