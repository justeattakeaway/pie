export default async function prCheckboxes({ fail, pr, flags }) {
    if (flags.isDependabotPR) return;

    const { body } = pr;
    const uncheckedCheckboxRegex = /- \[ \]/g;

    const sections = body.split(/## /);
    const notApplicableSection = sections.find((section) => section.startsWith('Not-applicable Checklist items'));

    const uncheckedOutsideNotApplicableSection = sections.some((section) => {
        if (section !== notApplicableSection) {
            return uncheckedCheckboxRegex.test(section);
        }
        return false;
    });

    if (uncheckedOutsideNotApplicableSection) {
        fail('You have unchecked checklist items outside the "Not-applicable Checklist items" section.\n\nPlease ensure all unchecked checkboxes are moved to the appropriate section.');
    }

    const reviewer1Section = body.match(/### Reviewer 1.*?(?=###|$)/s);
    const reviewer2Section = body.match(/### Reviewer 2.*?(?=###|$)/s);

    const checkReviewerSection = (section, reviewerName) => {
        if (section) {
            const uncheckedReviewerCheckboxes = section.match(uncheckedCheckboxRegex);
            if (uncheckedReviewerCheckboxes) {
                fail(`You have unchecked checklist items in ${reviewerName}'s section.\n\nPlease ensure all items are addressed before approval.`);
            }
        }
    };

    checkReviewerSection(reviewer1Section ? reviewer1Section[0] : null, 'Reviewer 1');
    checkReviewerSection(reviewer2Section ? reviewer2Section[0] : null, 'Reviewer 2');
}
