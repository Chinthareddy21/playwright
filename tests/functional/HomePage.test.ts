import test from '@lib/BaseTest';

/* Verify login tests,
Run command: npx cross-env ENV=qa npm run test:userCreation
*/

test.describe(`User creation tests`, () => {
    test('Navigation to url', async ({ HomePage }) => {
        await HomePage.navigateToURL();
        await UserCreationPage.navigationToRegisterPage();
    });

    test('verify user can fill data', async ({ UserCreationPage }) => {
        await UserCreationPage.navigateToURL();
        await UserCreationPage.navigationToRegisterPage();
        await UserCreationPage.fillingUserDetails();
    });

    test('Verify password rule is displayed', async ({ UserCreationPage }) => {
        await UserCreationPage.navigateToURL();
        await UserCreationPage.navigationToRegisterPage();
        await UserCreationPage.fillingUserDetails();
        await UserCreationPage.passwordRuleVerificattion();
    });

    test('Completing registration', async ({ UserCreationPage }) => {
        await UserCreationPage.navigateToURL();
        await UserCreationPage.navigationToRegisterPage();
        await UserCreationPage.fillingUserDetails();
        await UserCreationPage.completingRegistration();
    });

    test('Verify Email ID already exist error message was displayed', async ({ UserCreationPage }) => {
        await UserCreationPage.navigateToURL();
        await UserCreationPage.navigationToRegisterPage();
        await UserCreationPage.fillingUserDetails();
        await UserCreationPage.completingRegistration();
        await UserCreationPage.emailidAlreadyExistsErrorMessage();
    });
});