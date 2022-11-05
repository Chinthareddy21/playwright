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

    async cookieAccept(): Promise<void> {
        await webActions.clickElement(HomePageObjects.COOKIE_ACCEPT_XPATH);
        await this.page.waitForLoadState('load');
    }

    async verifyCookieMessageDisplayedAtBottom(): Promise<void> {
        await webActions.clickElement(HomePageObjects.AGREE_XPATH);
        await this.page.waitForLoadState('load');
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
        await this.page.waitForLoadState('load');
        await this.page.locator(HomePageObjects.LOGO_XPATH).isVisible();
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
        await webActions.clickElement(HomePageObjects.BLOOD_BANKING_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/blood-banking');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_blood_banking.png' });
        await webActions.clickElement(HomePageObjects.CHEMISTRY_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/chemistry');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_chemistry.png' });
        await webActions.clickElement(HomePageObjects.CLINICAL_INFORMATION_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/clinical-information-management-tools');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_clinical_information.png' });
        await webActions.clickElement(HomePageObjects.HEMATOLOGY_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/hematology');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_hematology.png' });
        await webActions.clickElement(HomePageObjects.IMMUNOASSAY_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/immunoassay');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_immunoassay.png' });
        await webActions.clickElement(HomePageObjects.MICROBIOLOGY_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/microbiology');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_microbiology.png' });
        await webActions.clickElement(HomePageObjects.PROTEIN_CHEMISTRY_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/protein-chemistry');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_protein_chemistry.png' });
        await webActions.clickElement(HomePageObjects.URINALYSIS_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/protein-chemistry');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_urinalysis.png' });
        await webActions.clickElement(HomePageObjects.ACCOUNT_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/products/protein-chemistry');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_account.png' });
        await webActions.clickElement(HomePageObjects.SDS_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/support/safety-data-sheets#techdocssearch');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_SDS.png' });
        await webActions.clickElement(HomePageObjects.EDUCATION_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/learning-and-events');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_education.png' });
        await webActions.clickElement(HomePageObjects.DOCUMENTATION_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/support/tech-docs');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_documentation.png' });
        await webActions.clickElement(HomePageObjects.CONTACT_US_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/support/contact-us');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_contact_us.png' });
        await webActions.clickElement(HomePageObjects.OVERVIEW_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/about-beckman-coulter');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_overview.png' });
        await webActions.clickElement(HomePageObjects.NEWSROOM_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/about-beckman-coulter/newsroom');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_newsroom.png' });
        await webActions.clickElement(HomePageObjects.EVENTS_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/learning-and-events/events');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_events.png' });
        await webActions.clickElement(HomePageObjects.BLOG_XPATH);
        await this.page.waitForLoadState("load");
        await webActions.verifyURL('https://www.beckmancoulter.com/en/blog');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_blog.png' });
        await webActions.clickElement(HomePageObjects.SUBSCRIBE_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.NEWSLETTER_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_subscribe.png' });
        await webActions.clickElement(HomePageObjects.PARITCLE_COUNTER_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_particle_counter.png' });
        await webActions.clickElement(HomePageObjects.CENTRIFUGATION_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_centrifugation.png' });
        await webActions.clickElement(HomePageObjects.CELL_COUNTER_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_cell_counter.png' });
        await webActions.clickElement(HomePageObjects.FLOW_CYTOMETRY_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_cytometry.png' });
        await webActions.clickElement(HomePageObjects.LIQUID_HANDLER_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_liquid_handler.png' });
        await webActions.clickElement(HomePageObjects.LIQUID_PARTICLE_COUNTER_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_liquid_particle_counter.png' });
        await webActions.clickElement(HomePageObjects.PARTICLE_CHARACTERIZATION_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_particle_charecterization.png' });
        await webActions.clickElement(HomePageObjects.TOC_ANALYZERS_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.REQUEST_QUOTE_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_TOC_analyzers.png' });
        await webActions.clickElement(HomePageObjects.LINKED_IN_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.LINKEDIN_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_linked_in.png' });
        await this.page.goBack();
        await webActions.clickElement(HomePageObjects.YOUTUBE_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.YOUTUBE_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_youtube.png' });
        await this.page.goBack();
        await webActions.clickElement(HomePageObjects.TWITTER_XPATH);
        await this.page.goBack({ waitUntil: 'load' });
        await this.page.locator(HomePageObjects.TWITTER_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_twitter.png' });
        await webActions.clickElement(HomePageObjects.FACEBOOK_XPATH);
        await this.page.waitForLoadState("load");
        await this.page.locator(HomePageObjects.FACEBOOK_NAME_XPATH).isVisible();
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/footerVisibility_facebook.png' });
    }

    async searchFromHomePage(): Promise<void> {
        await webActions.clickElement(HomePageObjects.SEARCH_BOX_XPATH);
        await webActions.enterElementText(HomePageObjects.SEARCH_BOX_XPATH, credentials.product2);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('load');
        await webActions.verifyElementContainsText(HomePageObjects.SEARCH_RESULT_XPATH, 'UniCel DxH Series with System Manager ReadMe: DxH 900 and DxH Slidemaker Stainer v1 (1.0)');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/searchOnHomePage.png' });
    }

    async store(): Promise<void> {
        await webActions.clickElement(HomePageObjects.COUNTRY_AND_LANGUAGE_XPATH);
        await webActions.clickElement(HomePageObjects.COUNTRY_XPATH)
        await webActions.enterElementText(HomePageObjects.COUNTRY_EDITBOX_XPATH, 'United States');
        await webActions.clickElement(HomePageObjects.ENTER_XPATH);
        await webActions.clickElement(HomePageObjects.STORE_XPATH);
        await webActions.enterElementText(HomePageObjects.ITEM_NUMBER_XPATH, 'MW0277');
        await webActions.clickElement(HomePageObjects.ADD_TO_CART_XPATH);
        await webActions.clickElement(HomePageObjects.CHECK_OUT_XPATH);
        await webActions.verifyElementText(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.ORDER_AND_STATUS_TRACKING_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementIsDisplayed(HomePageObjects.CUSTOMER_ACC_NUM_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.SCHEDULED_ORDERS_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementIsDisplayed(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus1.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.QUICK_ORDERS_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyURL('https://www.beckmancoulter.com/wsrportal/page/quickOrderInitPage');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus2.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.SHOPPING_LIISTS_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementText(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus3.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.INVOICES_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementIsDisplayed(HomePageObjects.USERNAME_EDITBOX_ID, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus4.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.SHOPPING_FAQS_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyURL('https://www.beckmancoulter.com/en/support/faqs');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus5.png' });
        await this.page.goBack();
        await this.page.locator(HomePageObjects.STORE_XPATH).hover();
        await webActions.clickElement(HomePageObjects.QUOTE_REQUESTS_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementText(HomePageObjects.ITEM_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/homePageFunctionalityTests/storeOptionAndExploreOtherSubMenus6.png' });
    }

    async contactUsForm(): Promise<void> {
        await webActions.clickElement(HomePageObjects.AGREE_XPATH);
        await webActions.clickElement(HomePageObjects.CONTACT_US_XPATH);
        await webActions.clickElement(HomePageObjects.INQUIRY_TYPE_XPATH);
        await webActions.clickElement(HomePageObjects.TRAINING_XPATH);
        await webActions.clickElement(HomePageObjects.PRODUCT_NAME_XPATH);
        await webActions.clickElement(HomePageObjects.CHEMISTRY_XPATH);
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