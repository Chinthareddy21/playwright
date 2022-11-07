import test from '@lib/BaseTest';

/* Verify login tests,
Run command: npx cross-env ENV=qa npm run test:login
*/

test.describe(`Login tests`, () => {
    test('Login by user', async({loginPage}) => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await loginPage.verifyOTPVerifyButton();
    });

    test('verify OTP verification is displayed on succesful login by user', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplication();
        await loginPage.verifyOTPVerifyButton();
    });

    test('Verify error message on login by invalid credentials', async ({ loginPage }) => {
        await loginPage.navigateToURL();
        await loginPage.loginToApplicationByInvalidUsername();
        await loginPage.loginToApplicationByPassword();
    })
});