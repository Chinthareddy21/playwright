import { credentials } from "@lib/credentials";
import { url_s } from "@lib/url's";
import { SearchPageObjects } from "@objects/SearchPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from "@playwright/test/types/test";

let webActions: WebActions;

export class searchPage extends SearchPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToHome(): Promise<void> {
        await webActions.navigateToURL(url_s.baseURL);
    }

    async clearCookies(): Promise<void> {
        await this.page.context().clearCookies();
    }

    async navigateToSearchPagee(): Promise<void> {
        await webActions.navigateToURL(url_s.searchPageURL);
    }

    async cookieAccept(): Promise<void> {
        await webActions.clickElement(searchPage.COOKIE_ACCEPT_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.clickElement(searchPage.AGREE_XPATH);
    }

    async searchFromHomePage(): Promise<void> {
        await webActions.clickElement(SearchPageObjects.SEARCH_BOX_XPATH);
        await webActions.enterElementText(SearchPageObjects.SEARCH_BOX_XPATH, credentials.product1);
        await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('load')
        await webActions.verifyElementIsDisplayed(SearchPageObjects.RESULT_01_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/searchResultsFunctionalityOnHomePage.png' });

    }

    async ApplyFilters(): Promise<void> {
        await webActions.clickElementJS(SearchPageObjects.TECHNICAL_DOCUMENT_XPATH);
        await webActions.clickElement(SearchPageObjects.DOCUMENT_CATEGORIES_XPATH);
        await webActions.clickElement(SearchPageObjects.DATA_SAFETY_SHEET_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.RESULT_01_XPATH, 'fail')
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/filterOptionOnSearchResultsPage.png' });
    }

    async downloadingDocuments(): Promise<void> {
        await webActions.clickElementJS(SearchPageObjects.TECHNICAL_DOCUMENT_XPATH);
        await webActions.clickElement(SearchPageObjects.DOCUMENT_CATEGORIES_XPATH);
        await webActions.clickElement(SearchPageObjects.DATA_SAFETY_SHEET_XPATH);
        await webActions.clickElement(SearchPageObjects.RESULT_CHECKBOX_01_XPATH);
        await webActions.clickElement(SearchPageObjects.RESULT_CHECKBOX_03_XPATH);
        await webActions.clickElement(SearchPageObjects.RESULT_CHECKBOX_05_XPATH);
        await webActions.clickElement(SearchPageObjects.DOWNLOAD_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.GENERATE_ZIP_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/downloadOfMultipleDocuments.png' });
    }

    async verifyCaptchaBeforeDownload(): Promise<void> {
        await webActions.clickElementJS(SearchPageObjects.TECHNICAL_DOCUMENT_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.clickElement(SearchPageObjects.DOCUMENT_CATEGORIES_XPATH);
        await webActions.clickElement(SearchPageObjects.DATA_SAFETY_SHEET_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.clickElement(SearchPageObjects.RESULT_CHECKBOX_01_XPATH);
        await webActions.clickElement(SearchPageObjects.RESULT_CHECKBOX_03_XPATH);
        await webActions.clickElement(SearchPageObjects.RESULT_CHECKBOX_05_XPATH);
        await webActions.clickElement(SearchPageObjects.DOWNLOAD_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementIsHidden(SearchPageObjects.CAPTCHA_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(SearchPageObjects.GENERATE_ZIP_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/captchaPresentWhileDownloadingOfDocuments.png' });
    }

    async desiredResultsNumberPerPage(): Promise<void> {
        await webActions.clickElementJS(SearchPageObjects.TECHNICAL_DOCUMENT_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.clickElement(SearchPageObjects.VIEW_XPATH);
        await webActions.clickElement(SearchPageObjects.VIEW_25_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.RESULT_BOX_DOWNLOAD, 'fail');
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/viewTabsFunctionalityOnSearchResultsPage1.png' });
        await webActions.clickElement(SearchPageObjects.VIEW_XPATH);
        await webActions.clickElement(SearchPageObjects.VIEW_50_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.RESULT_BOX_DOWNLOAD, 'fail');
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/viewTabsFunctionalityOnSearchResultsPage2.png' });
        await webActions.clickElement(SearchPageObjects.VIEW_XPATH);
        await webActions.clickElement(SearchPageObjects.VIEW_100_XPATH);
        await this.page.waitForLoadState('load');
        await webActions.verifyElementIsDisplayed(SearchPageObjects.RESULT_BOX_DOWNLOAD, 'fail');
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/viewTabsFunctionalityOnSearchResultsPage3.png' });
    }
    async optionsAreClickable(): Promise<void> {
        await webActions.clickElement(SearchPageObjects.SEARCH_XPATH);
        await webActions.clickElementJS(SearchPageObjects.ALL_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElementJS(SearchPageObjects.PRODUCTS_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElementJS(SearchPageObjects.TECHNICAL_DOCUMENT_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.LANGUAGE_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.LANGUAGE_ARROW_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.DOCUMENT_CATEGORIES_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.DOCUMENT_CATEGORIES_ARROW_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.PRODUCT_LINES_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.PRODUCT_LINES_ARROW_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.CLEAR_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.SELECT_ALL_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.LAST_PAGE_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.START_PAGE_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.NEXT_PAGE_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.BEFORE_PAGE_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.VIEW_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await webActions.clickElement(SearchPageObjects.SORT_XPATH);
        await webActions.verifyElementIsDisplayed(SearchPageObjects.PAGE_2_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/searchResulltsPageFunctionality/paginationFunctionalityOnTechnicalDocumentsPage.png' });
    }
}