import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { MyAccountPage } from '@pages/MyAccountPage';
import { MyAddressesPage } from '@pages/MyAddressesPage'
import { MyPersonalInformationPage } from '@pages/MyPersonalInformationPage';
import { UserCreationPage } from '@pages/UserCreationPage';
import { HomePageLogoCheck } from '@pages/homePage';

const test = baseTest.extend<{
    loginPage: LoginPage;
    UserCreationPage: UserCreationPage;
    HomePage: HomePage;
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