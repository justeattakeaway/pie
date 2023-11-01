window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line
    docsearch({
        // public algolia keys (can be exposed)
        appId: 'L21G25CLL1',
        apiKey: '75fcb9c4b333a7a004ae63e6a736a81e',
        indexName: 'pie',
        container: '#docsearch',
    });

    document.querySelector('.DocSearch').onclick = () => {
        const startScreenOptions = [
            {
                category: {
                    name: 'All About PIE',
                    icon: '/assets/img/search/pie.svg',
                },
                items: [
                    { name: 'What is PIE', href: '/all-about-pie/what-is-pie/' },
                    { name: 'Our Vision', href: '/all-about-pie/our-vision/' },
                    { name: 'Roadmap', href: '/all-about-pie/roadmap/' },
                ],
            },
            {
                category: {
                    name: 'Designers',
                    icon: '/assets/img/search/bulb-lightning.svg',
                },
                items: [
                    { name: 'Getting Started', href: '/designers/getting-started/overview/' },
                    { name: 'Contributing', href: '/designers/contributing/' },
                    { name: 'How we support you', href: '/designers/how-we-support-you/' },
                ],
            },
            {
                category: {
                    name: 'Engineers',
                    icon: '/assets/img/search/engineers.svg',
                },
                items: [
                    { name: 'Getting Started', href: '/engineers/getting-started/overview/' },
                    { name: 'Guidelines', href: '/engineers/guidelines/overview/' },
                    { name: 'Contributing', href: '/engineers/contributing/overview/' },
                ],
            },
            {
                category: {
                    name: 'Support',
                    icon: '/assets/img/search/help-circle.svg',
                },
                items: [
                    { name: 'FAQs', href: '/support/faq/' },
                    { name: 'Contact Us', href: '/support/contact-us/' },
                ],
            }
        ];

        const hits = document.querySelector('.DocSearch-Dropdown');

        const result =
            `<div class="DocSearch-NewStartScreen">${startScreenOptions.map(({ category, items }) => `<div key="${category.name}" class="DocSearch-NewStartScreenCategory">
        <div class="DocSearch-NewStartScreenHeader">
          <img class="DocSearch-Icon" src="${category.icon}" alt="">
          <div class="DocSearch-Title">${category.name}</div>
        </div>${items.map(({ name, href }) => `<a href=${href} class="DocSearch-NewStartScreenItem">
            ${name}
          </a>`).join('')

                }</div>`).join('')

            }</div>`;

        if (hits !== 'null') {
            hits.insertAdjacentHTML(
                'beforeend',
                result,
            );
        }
    };
});
