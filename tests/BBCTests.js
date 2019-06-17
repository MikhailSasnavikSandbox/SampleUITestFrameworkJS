module.exports = {
    'TC201_Signup_ExitClicked_NavigatedtoSignInPage' (browser){
        //Navigate to the registration page and click exit
        const accountTypeRegistrationPage = browser.page.accountTypeRegistrationPage();
        accountTypeRegistrationPage
            .navigate()
            .clickExit();

        //Assert Uri and page Title
        browser.expect.url().to.equal('https://www.bbc.com/').before(2000);
        browser.expect.title().to.equal('BBC - Homepage');
    },
    'TC200_Signup_ValidCredentials_Success' (browser){
        //Proceed with initial registration page
        const accountTypeRegistrationPage = browser.page.accountTypeRegistrationPage();
        accountTypeRegistrationPage
            .navigate()
            .waitSpinner()
            .clickOver13Button();

        //Fill birth date fields. Then proceed
        const ageRegistrationPage = browser.page.ageRegistrationPage();
        ageRegistrationPage
            .waitSpinner()
            .setDay('29')
            .setMonth('01')
            .setYear('1997')
            .submitDateInfo();

        //Set email, password, choose your country. Then proceed
        const randomId = (((1+Math.random())*0x10000000000000000)|0).toString(16).substring(1);
        const personalInfoRegistrationPage = browser.page.personalInfoRegistrationPage();
        personalInfoRegistrationPage
            .waitSpinner()
            .setEmail(`email${randomId}@asd.ru`)
            .setPassword(`Password!${randomId}`)
            .setCountry( 'it')
            .submitPersonalInfo();

        //Accept email recommendation. Then proceed
        const registrationCompletedPage = browser.page.registrationCompletedPage();
        registrationCompletedPage
            .acceptEmailRecommendation()
            .submitRecommendationsPreferency();

        //Assert Uri and page Title
        browser.expect.url().to.equal('https://www.bbc.com/').before(2000);
        browser.expect.title().to.equal('BBC - Homepage');
    }
}