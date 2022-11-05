import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import { url_s } from "@lib/url's";
import { credentials } from "@lib/credentials";

let webActions: WebActions;

export class LoginPage extends LoginPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(url_s.loginPageURL);
    }

    async loginToApplication(): Promise<void> {
        await this.page.waitForLoadState('load');
        await webActions.enterElementText(LoginPageObjects.USERNAME_EDITBOX_ID, credentials.username);
        await webActions.enterElementText(LoginPageObjects.PASSWORD_EDITBOX_ID, credentials.password);
        await webActions.clickElement(LoginPageObjects.LOGIN_BUTTON_ID);
        await this.page.waitForLoadState('load');
    }

    async verifyOTPVerifyButton(): Promise<void> {
        await webActions.verifyElementContainsText(LoginPageObjects.OTP_VERIFY_BUTTON_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/loginFunctionalityTests/loginCredentialsForValidatedUser.png' });
    }

    async loginToApplicationByInvalidUsername(): Promise<void> {
        await this.page.goBack();
        await this.page.waitForLoadState('load');
        await webActions.enterElementText(LoginPageObjects.USERNAME_EDITBOX_ID, credentials.invalid_username);
        await webActions.enterElementText(LoginPageObjects.PASSWORD_EDITBOX_ID, credentials.password);
        await webActions.clickElement(LoginPageObjects.LOGIN_BUTTON_ID);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementIsDisplayed(LoginPageObjects.INVALID_USERNAME_OR_PASSWORD_ERROR_XPATH, 'fail')
        await this.page.screenshot({ path: './screenshot/loginFunctionalityTests/loginByInvalidUsername.png' });
    }

    async loginToApplicationByPassword(): Promise<void> {
        await this.page.goBack();
        await this.page.waitForLoadState('load');
        await webActions.enterElementText(LoginPageObjects.USERNAME_EDITBOX_ID, credentials.username);
        await webActions.enterElementText(LoginPageObjects.PASSWORD_EDITBOX_ID, credentials.invalid_password);
        await webActions.clickElement(LoginPageObjects.LOGIN_BUTTON_ID);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementIsDisplayed(LoginPageObjects.INVALID_USERNAME_OR_PASSWORD_ERROR_XPATH, 'fail')
        await this.page.screenshot({ path: './screenshot/loginFunctionalityTests/loginByInvalidPassword.png' });
    }
}
