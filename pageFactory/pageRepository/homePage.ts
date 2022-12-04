import { url_s } from "@lib/url's";
import { HomePageObjects } from "@objects/HomePageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import { credentials } from '@lib/credentials'

let webActions: WebActions;

export class HomePage extends HomePageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(url_s.baseURL);
    }

    async clearCookies(): Promise<void> {
        await this.page.context().clearCookies();
    }

    async cookieAccept(): Promise<void> {
        await webActions.clickElement(HomePageObjects.COOKIE_ACCEPT_XPATH);
    }

    async verifyCookieMessageDisplayedAtBottom(): Promise<void> {
        await webActions.clickElement(HomePageObjects.AGREE_XPATH);
    }

    async verifyUserCanChangeLanguage(): Promise<void> {
        await webActions.clickElement(HomePageObjects.COUNTRY_AND_LANGUAGE_XPATH);
        await webActions.clickElement(HomePageObjects.LANGUAGE_XPATH);
        await webActions.clickElement(HomePageObjects.ENGLISH_XPATH);
        await webActions.clickElement(HomePageObjects.ENTER_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.CONTACT_US_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/loginPageUpdatedTests/changeLanguagueAndVerifyThePersistence.png' });
    }

    async logocheck(): Promise<void> {
        await webActions.clickElement(HomePageObjects.LOGO_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.CONTACT_US_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/HomePageFunctionalityTests/HomePageLogoCheck.png' });
    }

    async verifyUserCanChangeCountry(): Promise<void> {
        await webActions.clickElement(HomePageObjects.COUNTRY_AND_LANGUAGE_XPATH);
        await webActions.clickElement(HomePageObjects.COUNTRY_XPATH);
        await webActions.enterElementText(HomePageObjects.COUNTRY_EDITBOX_XPATH, 'United States');
        await webActions.clickElement(HomePageObjects.ENTER_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.CONTACT_US_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/countrySelectorFunctionality.png' });
    }

    async firstComponentIsAfterNavigationbar(): Promise<void> {
        await this.page.locator(HomePageObjects.MENU_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/firstComponentIsImmediateAfterMenuBar.png' });
    }

    async clickingDisplaysHoverItems(): Promise<void> {
        await this.page.locator(HomePageObjects.PRODUCTS_XPATH).hover();
        await webActions.verifyElementIsDisplayed(HomePageObjects.CHEMISTRY_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/hoveringOnMenuBarItemsShowsSubmenus_products.png' });
        await this.page.locator(HomePageObjects.SUPPORT_XPATH).hover();
        await webActions.verifyElementIsDisplayed(HomePageObjects.ACC_SETTING_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/hoveringOnMenuBarItemsShowsSubmenus_support.png' });
        await this.page.locator(HomePageObjects.RESOURCES_XPATH).hover();
        await webActions.verifyElementIsDisplayed(HomePageObjects.TRAINING_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/hoveringOnMenuBarItemsShowsSubmenus_resourcess.png' });
        await this.page.locator(HomePageObjects.COMPANY_XPATH).hover();
        await webActions.verifyElementIsDisplayed(HomePageObjects.OVERVIEW_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/hoveringOnMenuBarItemsShowsSubmenus_company.png' });
    }

    async VerifyClickingUpArrowMovesToTop(): Promise<void> {
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        await webActions.clickElement(HomePageObjects.UP_ARROW_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.LOGO_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/jumpArrowFunctionality.png' });
    }

    async verifyFooterIsVisibleAndClickable(): Promise<void> {
        await webActions.clickElement(HomePageObjects.AUTOMATION_SYSTEMS_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/automation');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_Automation.png' });
        await this.page.goBack();
        await webActions.clickElement(HomePageObjects.EDUCATION_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/learning-and-events');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_education.png' });
        await this.page.goBack();
        await webActions.clickElement(HomePageObjects.FOOTER_OVERVIEW_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/about-beckman-coulter');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_overview.png' });
        await this.page.goBack();
        await webActions.clickElement(HomePageObjects.SUBSCRIBE_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.NEWSLETTER_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_subscribe.png' });
        await webActions.clickElement(HomePageObjects.PARITCLE_COUNTER_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_particle_counter.png' });
    }

    async verifyFollowUsLinkedIn(): Promise<void> {
        await webActions.clickElement(HomePageObjects.LINKED_IN_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.LINKEDIN_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_linked_in.png' });
    }

    async verifyFollowUsYoutube(): Promise<void> {
        await webActions.clickElement(HomePageObjects.YOUTUBE_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.YOUTUBE_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_youtube.png' });
    }

    async verifyFollowUsTwitter(): Promise<void> {
        await webActions.clickElement(HomePageObjects.TWITTER_XPATH);
        await this.page.goBack({ waitUntil: 'load' });
        await this.page.locator(HomePageObjects.TWITTER_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_twitter.png' });
    }
    async verifyFollowUsFacebook(): Promise<void> {
        await webActions.clickElement(HomePageObjects.FACEBOOK_XPATH);
        await this.page.locator(HomePageObjects.FACEBOOK_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_facebook.png' });
    }

    async searchFromHomePage(): Promise<void> {
        await webActions.clickElement(HomePageObjects.SEARCH_BOX_XPATH);
        await webActions.enterElementText(HomePageObjects.SEARCH_BOX_XPATH, credentials.product2);
        await this.page.keyboard.press('Enter');
        await webActions.verifyElementIsDisplayed(HomePageObjects.SEARCH_RESULT_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/searchOnHomePage.png' });
    }

    async storeObjects(): Promise<void> {
        await webActions.clickElement(HomePageObjects.COUNTRY_AND_LANGUAGE_XPATH);
        await webActions.clickElement(HomePageObjects.COUNTRY_XPATH)
        await webActions.enterElementText(HomePageObjects.COUNTRY_EDITBOX_XPATH, 'United States');
        await webActions.clickElement(HomePageObjects.ENTER_XPATH);
        await webActions.clickElement(HomePageObjects.STORE_XPATH);
        await webActions.enterElementText(HomePageObjects.ITEM_NUMBER_XPATH, 'MW0277');
        await webActions.clickElement(HomePageObjects.ADD_TO_CART_XPATH);
        await webActions.clickElement(HomePageObjects.CHECK_OUT_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.ORDER_AND_STATUS_TRACKING_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.CUSTOMER_ACC_NUM_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.SCHEDULED_ORDERS_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus1.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.QUICK_ORDERS_XPATH);
        await webActions.verifyURL('https://www.beckmancoulter.com/wsrportal/page/quickOrderInitPage');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus2.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.SHOPPING_LIISTS_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus3.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.INVOICES_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus4.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.SHOPPING_FAQS_XPATH);
        await webActions.verifyURL('https://www.beckmancoulter.com/en/support/faqs');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus5.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.QUOTE_REQUESTS_XPATH);
        await webActions.verifyElementIsDisplayed(HomePageObjects.ITEM_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus6.png' });
    }

    async contactUsForm(): Promise<void> {
        await webActions.clickElement(HomePageObjects.AGREE_XPATH);
        await webActions.clickElement(HomePageObjects.CONTACT_US_XPATH);
        await webActions.clickElement(HomePageObjects.INQUIRY_TYPE_XPATH);
        await webActions.clickElement(HomePageObjects.INQUIRY_TRAINING_XPATH);
        await webActions.clickElement(HomePageObjects.PRODUCT_NAME_XPATH);
        await webActions.clickElement(HomePageObjects.PRODUCT_CHEMISTRY_XPATH);
        await webActions.clickElement(HomePageObjects.HARDWARE_XPATH);
        await webActions.clickElement(HomePageObjects.SALUTATION_XPATH);
        await webActions.clickElement(HomePageObjects.PROFESSOR_XPATH);
        await webActions.enterElementText(HomePageObjects.FIRST_NAME_XPATH, credentials.firstname);
        await webActions.enterElementText(HomePageObjects.LAST_NAME_XPATH, credentials.lastname);
        await webActions.enterElementText(HomePageObjects.EMAIL_XPATH, credentials.emailID);
        await webActions.enterElementText(HomePageObjects.PHONE_NUMBER_XPATH, credentials.phonenumber);
        await webActions.enterElementText(HomePageObjects.COMPANYY_NAME_XPATH, 'Dummy.co.in')
        await webActions.enterElementText(HomePageObjects.DEPARTMENT_XPATH, 'chemistry');
        await webActions.clickElement(HomePageObjects.JOB_TITLE_XPATH);
        await webActions.clickElement(HomePageObjects.STUDENT_PROFESSOR_XPATH);
        await webActions.enterElementText(HomePageObjects.QUESTION_XPATH, 'Training');
        await webActions.clickElementJS(HomePageObjects.EMAIL_DO_NOT_CONSENT_XPATH);
        await webActions.clickElementJS(HomePageObjects.PHONE_DO_NOT_CONSENT_XPATH);
        await webActions.clickElementJS(HomePageObjects.TERMS_XPATH);
        await webActions.clickElementJS(HomePageObjects.CAPTCHA_XPATH);
        await webActions.clickElement(HomePageObjects.SUBMIT_BUTTON_XPATH);
        await webActions.verifyElementText(HomePageObjects.ERROR_XPATH, 'Please complete reCaptcha validation.');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/contactUsForm.png' });
    }
}