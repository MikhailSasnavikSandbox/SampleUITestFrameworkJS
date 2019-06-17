module.exports = {
    url: 'https://account.bbc.com/register',
    elements: {
        under13Button: 'a[href *= "/register/details/guardian"]',
        over13Button: 'a[href *= "/register/details/age"]',
        exitSignUp: '.page__close-icon',
        spinner: 'div[class *= "spinner"]'
    },
    commands: [{        
		//use "expect" instead of "waitForElementNotVisible()" as it was not working for some reason ¯\_(ツ)_/¯
		waitSpinner(){
            this.expect.element('@spinner').to.not.be.visible.before(3000);
            return this
        },
        clickOver13Button(){
            return this
                .click('@over13Button');
        },
        clickExit(){
            return this
                .click("@exitSignUp")
        }
    }]
}