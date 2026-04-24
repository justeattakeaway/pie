import { validatePrTitle } from '../git-hooks/git-hooks-utils.js';

export default async function prTitle({ fail, pr, flags }) {
    if (flags.isAutomationPR) return;

    const { title } = pr;
    if (!validatePrTitle(title)) {
        fail(`❌ **PR Title Validation Failed**\n\nThe PR title should follow the same convention used for commits, e.g.:\n\`type(scope): TICKET-123 title\` where \`TICKET-123\` is a valid ticket ID.\n\n**Note:** Ticket IDs cannot be all zeros (e.g. DSW-000 is not allowed).\n\n**Current title:** \`${title}\``);
    }
}
