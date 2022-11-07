import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { MyAccountPage } from '@pages/MyAccountPage';
import { MyAddressesPage } from '@pages/MyAddressesPage'
import { MyPersonalInformationPage } from '@pages/MyPersonalInformationPage';
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
    myAccountPage: MyAccountPage;
    myAddressesPage: MyAddressesPage;
    myPersonalInformationPage: MyPersonalInformationPage;

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
    },
    myAccountPage: async ({ page }, use) => {
        await use(new MyAccountPage(page));
    },
    myAddressesPage: async ({ page }, use) => {
        await use(new MyAddressesPage(page));
    },
    myPersonalInformationPage: async ({ page }, use) => {
        await use(new MyPersonalInformationPage(page));
    }
});

export default test;