export class LoginPageObjects {
    protected static USERNAME_EDITBOX_ID = `#username`;
    protected static PASSWORD_EDITBOX_ID = `#password`;
    protected static LOGIN_BUTTON_ID = `#kc-login`;
    protected static COUNTRY_AND_LANGUAGE_XPATH = `//*[@id="universal-nav-country-language-link"]/a`;
    protected static COUNTRY_XPATH = `//div[7]/div/div/div/div[2]/form/div[2]/div/i`;
    protected static COUNTRY_INPUT_XPATH = `//input[@class='search']`;
    protected static ENTER_XPATH = `//input[@name='launch-language-selection']`;
    protected static LANGUAGE_XPATH = `//div[7]/div/div/div/div[2]/form/div[3]/div`;
    protected static OTP_CODE_ENTRY_XPATH = '//*[@id="authCode"]';
    protected static OTP_VERIFY_BUTTON_XPATH = '//*[@id="twofa-form"]/div/input';
    protected static INVALID_USERNAME_OR_PASSWORD_ERROR_XPATH = '//*[@id="kc-form-login"]/div[2]';
}