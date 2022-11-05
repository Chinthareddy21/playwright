import { credentials } from "@lib/credentials";
import { url_s } from "@lib/url's";
import { userCreationPageObjects } from "@objects/userCreationPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';

let webActions: WebActions;

export class UserCreationPage extends userCreationPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(url_s.baseURL);
    }
    async navigationToRegisterPage(): Promise<void> {
        await webActions.clickElement(userCreationPageObjects.COOKIE_ACCEPT_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.clickElement(userCreationPageObjects.LOGIN_XPATH);
        await webActions.clickElement(userCreationPageObjects.REGISTER_XPATH);
        await webActions.clickElement(userCreationPageObjects.REGISTER_AGREE_XPATH);
    }

    async fillingUserDetails(): Promise<void> {
        await webActions.clickElement(userCreationPageObjects.COUNTRY_XPATH);
        await webActions.enterElementText(userCreationPageObjects.COUNTRY_XPATH, credentials.country);
        await webActions.enterElementText(userCreationPageObjects.FIRST_NAME_XPATH, credentials.firstname);
        await webActions.enterElementText(userCreationPageObjects.LAST_NAME_XPATH, credentials.lastname);
        await webActions.enterElementText(userCreationPageObjects.INSTITUTION_NAME_XPATH, credentials.institutionname);
        await webActions.enterElementText(userCreationPageObjects.PHONE_NUMBER_XPATH, credentials.phonenumber);
        await webActions.enterElementText(userCreationPageObjects.USER_NAME_XPATH, credentials.registration_username);
        await webActions.enterElementText(userCreationPageObjects.EMAIL_XPATH, credentials.emailID);
        await webActions.enterElementText(userCreationPageObjects.PASSWORD_XPATH, credentials.registration_password);
        await webActions.clickElementJS(userCreationPageObjects.I_DO_NOT_CONSENT_EMAIL_XPATH);
        await webActions.clickElementJS(userCreationPageObjects.I_DO_NOT_CONSENT_PHONE_XPATH);
        await webActions.clickElementJS(userCreationPageObjects.TERMS_XPATH);
    }

    async passwordRuleVerificattion(): Promise<void> {
        await webActions.verifyElementIsDisplayed(userCreationPageObjects.PASSWORD_RULE_XPATH, 'fail');
    }

    async emailidAlreadyExistsErrorMessage(): Promise<void> {
        await webActions.verifyElementContainsText(userCreationPageObjects.ERROR_XPATH, 'Email ID already exists');
        await this.page.screenshot({ path: './screenshot/loginFunctionalityTests/newUserCreation.png' });
    }

    async completingRegistration(): Promise<void> {
        await webActions.clickElementJS(userCreationPageObjects.NEXT_BUTTON_XPATH);
        await webActions.verifyElementContainsText(userCreationPageObjects.VERIFY_XPATH, 'Verify');
    }
}