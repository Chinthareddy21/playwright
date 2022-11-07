import test from '@lib/BaseTest';

test.describe(`Verify Follow Us`, async () => {
    test(`Verify Follow Us linked in`, async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyFollowUsLinkedIn();
    });

    test(`Verify Follow Us youtube`, async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyFollowUsYoutube();
    });
    test(`Verify Follow Us twitter`, async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyFollowUsTwitter();
    });
    test(`Verify Follow Us facebook`, async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await HomePage.cookieAccept();
        await HomePage.verifyFollowUsFacebook();
    });
});