const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const DynamicTablesPage = require('../../pages/DynamicTablesPage')

const dynamicTablesPage = new DynamicTablesPage()


Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	dynamicTablesPage.getInventoryHeading().should('have.text', heading)
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (purpose) => {
	purpose === 'X' ? dynamicTablesPage.getXButton().should('be.enabled')
        : dynamicTablesPage.getBtns().contains(purpose).should('be.enabled')
})

Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
	dynamicTablesPage.getTotal().should('have.text', total)
})


When(/^the user clicks on the "([^"]*)" button$/, (purpose) => {
	dynamicTablesPage.clickButton(purpose)
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, () => {
	dynamicTablesPage.getModalCard().should('be.visible')
	// Add heading validation here
})

Then(/^the user should see the "([^"]*)" label$/, (label) => {
	dynamicTablesPage.getModalLabels(label).should('be.visible')
})
// Below is trouble
Then(/^the user should see the "([^"]*)" input box is enabled$/, (id) => {
	dynamicTablesPage.getModalInputBoxes(id).should('be.enabled')
})
