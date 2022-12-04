import { url_s } from "@lib/url's";
import { BlogPageObjects } from "@objects/BlogPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from "@playwright/test/types/test";

let webActions: WebActions;

export class BlogPage extends BlogPageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(url_s.BlogPageURL);
    }

    async clearCookies(): Promise<void> {
        await this.page.context().clearCookies();
    }

    async cookieAccept(): Promise<void> {
        await webActions.clickElement(BlogPageObjects.COOKIE_ACCEPT_XPATH);
    }

    async welcomeBanner(): Promise<void> {
        await webActions.verifyElementIsDisplayed(BlogPageObjects.BLOG_CARD_1_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/welcomeBannerIisNotChoppedOffOnBlogPage.png' });
    }

    async blogsAreClickbaleOnPage(): Promise<void> {
        await webActions.clickElement(BlogPageObjects.BLOG_CARD_1_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.LEARN_MORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/blogsAreClickbaleOnPage1.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.BLOG_CARD_2_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SHARE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/blogsAreClickbaleOnPage2.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.BLOG_CARD_3_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SHARE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/blogsAreClickbaleOnPage3.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.BLOG_CARD_4_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SHARE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/blogsAreClickbaleOnPage4.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.BLOG_CARD_5_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SHARE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/blogsAreClickbaleOnPage5.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.BLOG_CARD_6_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SHARE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/blogsAreClickbaleOnPage6.png' });
    }

    async latestArticleViewBlogPage(): Promise<void> {
        await this.page.locator(BlogPageObjects.ARTICLE_VIEW_VALUE_XPATH).click();
        await webActions.verifyElementIsDisplayed(BlogPageObjects.LATEST_ARTICLE_XPATH, 'not found');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/latestArticleSectionOnBlogPage.png' });
    }

    async paginationOnBlogPage(): Promise<void> {
        await webActions.clickElement(BlogPageObjects.NEXT_PAGE_XPATH);
        await webActions.verifyElementContainsText(BlogPageObjects.PAGENUM_4_XPATH, '4');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/paginationOnBlogPage1.png' });
        await webActions.clickElement(BlogPageObjects.BEFORE_PAGE_XPATH);
        await webActions.verifyElementContainsText(BlogPageObjects.PAGENUM_4_XPATH, '4');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/paginationOnBlogPage2.png' });
        await webActions.clickElement(BlogPageObjects.LAST_PAGE_XPATH);
        await webActions.verifyElementContainsText(BlogPageObjects.PAGENUM_4_XPATH, '14');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/paginationOnBlogPage3.png' });
        await webActions.clickElement(BlogPageObjects.FIRST_PAGE_XPATH);
        await webActions.verifyElementContainsText(BlogPageObjects.PAGENUM_4_XPATH, '4');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/paginationOnBlogPage4.png' });
    }

    async readMoreHasLinkAssociatedWithItOnBlogCards(): Promise<void> {
        await webActions.clickElement(BlogPageObjects.TITLE_BLOG_1_XPATH)
        await webActions.clickElement(BlogPageObjects.READMORE_1_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.LEARN_MORE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/readMoreHasLinkAssociatedWithItOnBlogCards.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.TITLE_BLOG_2_XPATH);
        await webActions.clickElement(BlogPageObjects.READMORE_2_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SHARE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/readMoreHasLinkAssociatedWithItOnBlogCards.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.TITLE_BLOG_3_XPATH);
        await webActions.clickElement(BlogPageObjects.READMORE_3_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SHARE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/readMoreHasLinkAssociatedWithItOnBlogCards.png' });
    }

    async search(): Promise<void> {
        await webActions.clickElement(BlogPageObjects.SEARCH_XPATH);
        await webActions.enterElementText(BlogPageObjects.SEARCH_XPATH, 'Automation');
        await this.page.keyboard.press('Enter');
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SEARCH_RESULT_IMAGE_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/searchOptionOnBlogs.png' });
    }

    async userCanDirectlyNavigateToDesiredBlogFromTagsSection(): Promise<void> {
        await webActions.clickElement(BlogPageObjects.BLOG_TAG_1_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SEARCH_RESULT1_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/userCanDirectlyNavigateToDesiredBlogFromTagsSection.png' });
        await this.page.goBack();
        await webActions.clickElement(BlogPageObjects.BLOG_TAG_5_XPATH);
        await webActions.verifyElementIsDisplayed(BlogPageObjects.SEARCH_RESULT1_XPATH, 'fail');
        await this.page.screenshot({ path: './screenshot/blogFunctionalityTests/userCanDirectlyNavigateToDesiredBlogFromTagsSection.png' });
    }

    async blogPageShowsBlogsAndTags(): Promise<void> {
        await webActions.verifyElementIsDisplayed(BlogPageObjects.BLOG_CARD_1_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(BlogPageObjects.BLOG_CARD_3_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(BlogPageObjects.BLOG_CARD_5_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(BlogPageObjects.BLOG_CARD_6_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(BlogPageObjects.BLOG_TAG_6_XPATH, 'fail');
        await webActions.verifyElementIsDisplayed(BlogPageObjects.BLOG_TAG_11_XPATH, 'fail');
    }
}