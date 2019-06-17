module.exports = {
    url: 'https://account.bbc.com/register',
    elements: {
        emailInput: '#user-identifier-input',
        passwordInput: '#password-input',
        countryDropdown: '#location-select',
        submitButton: '#submit-button',
        spinner: 'div[class *= "spinner"]'
    },
    commands: [{
        waitSpinner(){
			//use "expect" instead of "waitForElementNotVisible()" as it was not working for some reason ¯\_(ツ)_/¯
            this.expect.element('@spinner').to.not.be.visible.before(3000);
            return this
        },
        setEmail(value){
            return this
                .setValue('@emailInput', value);
        },
        setPassword(value){
            return this
                .setValue('@passwordInput', value);
        },
        setCountry(value){
            return this
                .click('@countryDropdown')
                .click(`option[value = "${value}"]`);
        },
        submitPersonalInfo(){
            return this
                .click('@submitButton');
        }
    }]
}