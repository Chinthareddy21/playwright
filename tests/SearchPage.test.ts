import test from '@lib/BaseTest';

/* Verify login tests,
Run command: npx cross-env ENV=qa npm run test:Searchpage
*/

test.describe(`search page tests`, () => {
    test('Verify user can search from homepage', async ({ SearchPage }) => {
        await SearchPage.navigateToHome();
        await SearchPage.cookieAccept();
        await SearchPage.searchFromHomePage();
    });

    test('Verify user can able to apply filters', async ({ SearchPage }) => {
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.ApplyFilters();
    });

    test('Verify user can download multiple documents', async ({ SearchPage }) => {
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.downloadingDocuments();
    });

    test('Verify user captcha was displayed on download page', async ({ SearchPage }) => {
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.verifyCaptchaBeforeDownload();
    });

    test('Verify user can view desired number of results', async ({ SearchPage }) => {
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.desiredNumberOfResultsPerPage();
    });

    test('Verify user can click on all options', async ({ SearchPage }) => {
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.optionsAreClickable();
    });

    test('Verify user can able to apply filters after clearing cookies', async ({ SearchPage }) => {
        await SearchPage.clearCookies();
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.ApplyFilters();
    });

    test('Verify user can download multiple documents after clearing cookies', async ({ SearchPage }) => {
        await SearchPage.clearCookies();
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.downloadingDocuments();
    });

    test('Verify user captcha was displayed on download page after clearing cookies', async ({ SearchPage }) => {
        await SearchPage.clearCookies();
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.verifyCaptchaBeforeDownload();
    });

    test('Verify user can view desired number of results after clearing cookies', async ({ SearchPage }) => {
        await SearchPage.clearCookies();
        await SearchPage.navigateToSearchPagee();
        await SearchPage.cookieAccept();
        await SearchPage.desiredNumberOfResultsPerPage();
    });
});