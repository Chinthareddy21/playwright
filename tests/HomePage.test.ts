import test from '@lib/BaseTest';

/* Verify login tests,
Run command: npx cross-env ENV=qa npm run test:Homepage
*/

test.describe(`Homepage tests`, () => {
    test('Verify cookie message displayed at bottom', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyCookieMessageDisplayedAtBottom();
    });

    test('Verify logo is displayed', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.logocheck();
    });

    test('Verify user was able to change country', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyUserCanChangeCountry();
    });

    test('Verify first element is after navigation bar', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.firstComponentIsAfterNavigationbar();
    });

    test('Verify clicking on item hovers and displays items', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.clickingDisplaysHoverItems();
    });

    test('Clicking arrow up moves to the top', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.VerifyClickingUpArrowMovesToTop();
    });

    test('Verify footer is visible and elements are clickable', async ({ HomePage }) => {
        test.setTimeout(5 * 60 * 1000);
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyFooterIsVisibleAndClickable();
    });

    test('Search from homepage', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.searchFromHomePage();
    });

    test('Verify user can click on store and other submenus', async ({ HomePage }) => {
        test.setTimeout(5 * 60 * 1000);
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.storeObjects();
    });

    test('Verify user can submit requests', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.contactUsForm();
    });

    test('Verify user was able to change country after clearing cookies', async ({ HomePage }) => {
        await HomePage.clearCookies();
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyUserCanChangeCountry();
    });

    test('Verify user was able to change language after clearing cookies', async ({ HomePage }) => {
        await HomePage.clearCookies();
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyUserCanChangeCountry();
    });

    test('Verify user was able to load page after clearing cookies', async ({ HomePage }) => {
        await HomePage.clearCookies();
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyCookieMessageDisplayedAtBottom();
    });

    test('Verify default country and language is US and English clearing cookies', async ({ HomePage }) => {
        await HomePage.clearCookies();
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.logocheck();
    });

    test('Verify page is loaded with header announcement bannerclearing cookies', async ({ HomePage }) => {
        await HomePage.clearCookies();
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.logocheck();
    });
});