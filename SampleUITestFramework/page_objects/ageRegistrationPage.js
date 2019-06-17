module.exports = {
    url: 'https://account.bbc.com/register',
    elements: {
        dayInput: '#day-input',
        monthInput: '#month-input',
        yearInput: '#year-input',
        submitButton: '#submit-button',
        spinner: 'div[class *= "spinner"]'
    },
    commands: [{
        waitSpinner(){
			//use "expect" instead of "waitForElementNotVisible()" as it was not working for some reason ¯\_(ツ)_/¯
            this.expect.element('@spinner').to.not.be.visible.before(3000);
            return this
        },
        setDay(value){
            return this
                .setValue('@dayInput', value);
        },
        setMonth(value){
            return this
                .setValue('@monthInput', value);
        },
        setYear(value){
            return this
                .setValue('@yearInput', value);
        },
        submitDateInfo(){
            return this
                .click('@submitButton');
        }
    }]
}