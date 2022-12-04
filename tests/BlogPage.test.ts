import test from '@lib/BaseTest';

/* Verify login tests,
Run command: npx cross-env ENV=qa npm run test:Blogpage
*/

test.describe(`Blogpage tests`, () => {
    test('Verify welcome is not chopped off', async ({ BlogPage }) => {
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.welcomeBanner();
    });

    test('Verify title blog has read more links associated with cards', async ({ BlogPage }) => {
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.readMoreHasLinkAssociatedWithItOnBlogCards();
    });

    test('Verify user can view desired number of articles', async ({ BlogPage }) => {
        test.setTimeout(2 * 60 * 1000)
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.latestArticleViewBlogPage();
    });

    test('Verify user can click on blogs', async ({ BlogPage }) => {
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.blogsAreClickbaleOnPage();
    });

    test('Verify user can use pagination options', async ({ BlogPage }) => {
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.paginationOnBlogPage();
    });

    test('Verify user was navigated to blog by searching on blog page', async ({ BlogPage }) => {
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.search();
    });

    test('Verify user was navigated to blog by click on tags', async ({ BlogPage }) => {
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.userCanDirectlyNavigateToDesiredBlogFromTagsSection();
    });

    test('Verify blog cards and tags were loaded after clearing cookies', async ({ BlogPage }) => {
        await BlogPage.clearCookies();
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.blogPageShowsBlogsAndTags();
    });

    test('Verify user can view desired number of articles after clearing cookies', async ({ BlogPage }) => {
        test.setTimeout(2 * 60 * 1000)
        await BlogPage.clearCookies();
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.latestArticleViewBlogPage();
    });

    test('Verify title blog has read more links associated with cards after clearing cookies', async ({ BlogPage }) => {
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.readMoreHasLinkAssociatedWithItOnBlogCards();
    });

    test('Verify user was navigated to blog by searching on blog page after clearing cookies', async ({ BlogPage }) => {
        await BlogPage.clearCookies();
        await BlogPage.navigateToURL();
        await BlogPage.cookieAccept();
        await BlogPage.search();
    });
});