const indexPageDisplay = require('../../../_11ty/shortcodes/indexPageDisplay');

describe('indexPageDisplay.js', () => {
    const testImageDirectory = '../../__tests__/_11ty/shortcodes/test-index-images';

    // Sample of 11y collections.all https://www.11ty.dev/docs/collections/
    const collectionAll = [
        {
            data: {
                title: 'First Sub Item',
                eleventyNavigation: {
                    key: 'First Sub Item',
                    parent: 'Test Menu Item',
                },
                page: {
                    url: '/first-sub-item/',
                },
            },
        },
        {
            data: {
                title: 'Second Sub Item',
                eleventyNavigation: {
                    key: 'Second Sub Item',
                    parent: 'Test Menu Item',
                },
                page: {
                    url: '/second-sub-item/',
                },
            },
        }];

    it('should return the expected HTML for an index page', () => {
        // act
        const result = indexPageDisplay({
            collection: collectionAll,
            itemKey: 'Test Menu Item',
            excludedElements: [],
            imageSrcDirectory: testImageDirectory,
        });

        // assert
        expect(result)
            .toMatchSnapshot();
    });

    it('should throw when image is not provided', () => {
        // setup
        const collectionsWithMissingImage = [...collectionAll];
        collectionsWithMissingImage.push({
            data: {
                title: 'Third Sub Item without image',
                eleventyNavigation: {
                    key: 'Third Sub Item without image',
                    parent: 'Test Menu Item',
                },
                page: {
                    url: '/second-sub-item/',
                },
            },
        });
        // act & assert
        expect(() => indexPageDisplay({
            collection: collectionsWithMissingImage,
            itemKey: 'Test Menu Item',
            excludedElements: [],
            imageSrcDirectory: testImageDirectory,
        })).toThrow('Image not provided for third-sub-item-without-image. Please ensure image is provided or add this item to ExcludedElements.');
    });

    it('should return the expected HTML for an index page with excluded items', () => {
        // act
        const result = indexPageDisplay({
            collection: collectionAll,
            itemKey: 'Test Menu Item',
            excludedElements: ['Second Sub Item'],
            imageSrcDirectory: testImageDirectory,
        });

        // assert
        expect(result)
            .toMatchSnapshot();
    });

    it('should not render items if the page is a draft', () => {
        // setup
        const collectionsWithDraft = [...collectionAll];
        collectionsWithDraft[0].data.draft = true;

        // act
        const result = indexPageDisplay({
            collection: collectionsWithDraft,
            itemKey: 'Test Menu Item',
            excludedElements: ['Third Sub Item without image'],
            imageSrcDirectory: testImageDirectory,
        });

        // assert
        expect(result)
            .toMatchSnapshot();
    });
});
