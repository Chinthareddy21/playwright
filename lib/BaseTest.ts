import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { UserCreationPage } from '@pages/UserCreationPage';
import { HomePage } from '@pages/HomePage';
import { BlogPage } from '@pages/BlogPage';
import { ProductsPage } from '@pages/ProductPage';
import { searchPage } from '@pages/SearchPage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    UserCreationPage: UserCreationPage;
    HomePage: HomePage;
    BlogPage: BlogPage;
    ProductsPage: ProductsPage;
    SearchPage: searchPage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    UserCreationPage: async ({ page }, use) => {
        await use(new UserCreationPage(page));
    },
    HomePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    BlogPage: async ({ page }, use) => {
        await use(new BlogPage(page));
    },
    ProductsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    },
    SearchPage: async ({ page }, use) => {
        await use(new searchPage(page));
    }
});

export default test;