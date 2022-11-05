export class userCreationPageObjects {

    protected static COOKIE_ACCEPT_XPATH = `//div[2]/div[2]/div[2]/button[1]`;
    protected static COOKIE_REJECT_XPATH = `//div[2]/div[2]/div[2]/button[2]`;
    protected static REGISTER_AGREE_XPATH = `//a[@aria-label='dismiss cookie message']`;
    protected static LOGIN_XPATH = `(//a[@class='menu-link parent-link '][normalize-space()='Log In'])[1]`;
    protected static REGISTER_XPATH = `//a[normalize-space()='Register']`;
    protected static COUNTRY_XPATH = `//div[3]/div[2]/div/div/div[1]/form/div/div[3]/div[2]/div[1]/div/input`;
    protected static FIRST_NAME_XPATH = `//input[@name='firstName']`;
    protected static LAST_NAME_XPATH = `//input[@name='lastName']`;
    protected static INSTITUTION_NAME_XPATH = `//input[@name='companyName']`;
    protected static PHONE_NUMBER_XPATH = `//input[@name='phoneNumber']`;
    protected static USER_NAME_XPATH = `//input[@name='username']`;
    protected static EMAIL_XPATH = `//input[@name='email']`;
    protected static PASSWORD_XPATH = `//input[@id='password']`;
    protected static I_DO_NOT_CONSENT_EMAIL_XPATH = `//input[@id='email-consent-out']`;
    protected static I_CONSENT_EMAIL_XPATH = `//input[@id='email-consent-in']`;
    protected static I_CONSENT_PHONE_XPATH = `//input[@id='phone-consent-in']`;
    protected static I_DO_NOT_CONSENT_PHONE_XPATH = `//input[@id='phone-consent-out']`;
    protected static TERMS_XPATH = `//input[@id='terms']`;
    protected static NEXT_BUTTON_XPATH = `//*[@id="registration-form"]/div[3]/div[2]/div[12]/div`;
    protected static VERIFY_XPATH = '//*[@id="begin-verify"]';
    protected static NEXT2_BUTTON_XPATH = `//div[@id="registration-form"]/div[4]/div[3]/div[2]`;
    protected static PASSWORD_RULE_XPATH = '//*[@id="password-requirements"]/ul';
    protected static ERROR_XPATH = '//*[@id="registration-form"]/div[3]/div[2]/div[11]';
}