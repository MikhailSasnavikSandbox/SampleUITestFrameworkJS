module.exports = {
    url: 'https://account.bbc.com/register',
    elements: {
        acceptEmailRecommendationsButton: 'label[for = "optIn"]',
        declineEmailRecommendationsButton: 'label[for = "optOut"]',
        submitButton: '#submit-button'
    },
    commands: [{
        acceptEmailRecommendation(){
            return this
                .click('@acceptEmailRecommendationsButton');
        },
        declineEmailRecommendations(value){
            return this
                .click('@declineEmailRecommendationsButton');
        },
        submitRecommendationsPreferency(){
            return this
                .click('@submitButton');
        }
    }]
}