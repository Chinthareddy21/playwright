import { url_s } from "@lib/url's";
import { ProductsPageObjects } from "@objects/ProductsPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from "@playwright/test/types/test";

let webActions: WebActions;

export class ProductsPage extends ProductsPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(url_s.productPageURL);
    }

    async clearCookies(): Promise<void> {
        await this.page.context().clearCookies();
    }


    async cookieAccept(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.COOKIE_ACCEPT_XPATH);
    }

    async clickingOnImages(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.IMAGE_4_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/description_ImagesAndOtherLinksOnProductDetailPage2.png' });
        await webActions.clickElement(ProductsPageObjects.IMAGE_3_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/description_ImagesAndOtherLinksOnProductDetailPage3.png' });
        await webActions.clickElement(ProductsPageObjects.IMAGE_5_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/description_ImagesAndOtherLinksOnProductDetailPage4.png' });
        await webActions.clickElement(ProductsPageObjects.IMAGE_2_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/description_ImagesAndOtherLinksOnProductDetailPage5.png' });
        await webActions.clickElement(ProductsPageObjects.REQUESTMORE_XPATH);
        await webActions.verifyElementContainsText(ProductsPageObjects.ITEM_NUMBER_XPATH, 'A91961');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/description_ImagesAndOtherLinksOnProductDetailPage6.png' });
    }

    async specificationTab(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.SPECIFICATIONS_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.SPECIFICATION_COLUMN_1_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/specificationTabUnderProductDetailsPage.png' });
    }

    async addToCartFunction(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.TEST_MENU_XPATH);
        await webActions.clickElement(ProductsPageObjects.ADD_TO_CART_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/requestQuoteFunctionality.png' });
    }

    async testMenuFunction(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.TEST_MENU_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUEST_QUOTE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/testMenuTabUnderProductDetailsPage.png' });
    }

    async downloadFunction(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.DOCUMENTS_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await webActions.clickElement(ProductsPageObjects.USER_GUIDE_XPATH);
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/documentsTabUnderProductDetailsPage.png' });
    }

    async pagination(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.TEST_MENU_XPATH);
        await webActions.clickElement(ProductsPageObjects.PAGENUM_NEXT_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/paginationUnderDifferentTabs1.png' });
        await webActions.clickElement(ProductsPageObjects.PAGENUM_LAST_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/paginationUnderDifferentTabs2.png' });
        await webActions.clickElement(ProductsPageObjects.PAGENUM_BEFORE_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/paginationUnderDifferentTabs3.png' });
        await webActions.clickElement(ProductsPageObjects.PAGENUM_FIRST_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.REQUESTMORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/paginationUnderDifferentTabs4.png' });
    }

    async requestQouteFunction(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.TEST_MENU_XPATH);
        await webActions.clickElement(ProductsPageObjects.REQUEST_QUOTE_XPATH);
        await webActions.verifyElementContainsText(ProductsPageObjects.ITEM_NUMBER_XPATH, '7S109');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/requestQuoteFunctionality.png' });
    }

    async shareFunction(): Promise<void> {
        await webActions.clickElement(ProductsPageObjects.SHARE_XPATH);
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.SHARE_LINKEDIN_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.SHARE_TWITTER_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.SHARE_FACEBOOK_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(ProductsPageObjects.SHARE_ENVLOPE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/productDetailsPageTests/shareIconFunctionalityOnProductDetailsPage.png' });
    }
}