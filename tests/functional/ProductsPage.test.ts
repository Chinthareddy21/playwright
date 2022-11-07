import test from '@lib/BaseTest';

/* Verify login tests,
Run command: npx cross-env ENV=qa npm run test:Productspage
*/

test.describe(`Product page tests`, () => {
    test('Verify user can click on images', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.clickingOnImages();
    });

    test('Verify user can click on share button', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.shareFunction();
    });

    test('Verify user can click on test menu', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.testMenuFunction();
    });

    test('Verify user can click on specification tab', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.specificationTab();
    });

    test('Verify user can click on pagination under test menu', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.pagination();
    });

    test('Verify user can click on add to cart under test menu', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.addToCartFunction();
    });

    test('Verify user can click on request quote under test menu', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.requestQouteFunction();
    });

    test('Verify user can click on download under test menu', async ({ ProductsPage }) => {
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.downloadFunction();
    });

    test('Verify user can click on test menu after clearing cookies', async ({ ProductsPage }) => {
        await ProductsPage.clearCookies();
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.testMenuFunction();
    });

    test('Verify user can click on download under test menu after clearing cookies', async ({ ProductsPage }) => {
        await ProductsPage.clearCookies();
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.downloadFunction();
    });

    test('Verify user can click on pagination under test menu after clearing cookies', async ({ ProductsPage }) => {
        await ProductsPage.clearCookies();
        await ProductsPage.navigateToURL();
        await ProductsPage.cookieAccept();
        await ProductsPage.pagination();
    });
});