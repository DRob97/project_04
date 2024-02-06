const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const DynamicTablesPage = require('../../pages/DynamicTablesPage')

const dynamicTablesPage = new DynamicTablesPage()

// Scenario 1
Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})

Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	dynamicTablesPage.getInventoryHeading().should('have.text', heading)
})

Then(/^the user should see the table with the headers below$/, (dataTable) => {
	const header = dataTable.rawTable.flat()

	dynamicTablesPage.getTableHeaders().each(($el, index) => {
		cy.wrap($el).should('have.text', header[index])
	})
})

Then(/^the user should see the table with the rows below$/, (dataTable) => {
	const data = dataTable.rawTable.flat()

	dynamicTablesPage.getTableData().each(($el, index) => {
		cy.wrap($el).should('have.text', data[index])
	})
})

Then(/^the user should see the "([^"]*)" button is enabled$/, (purpose) => {
	purpose === 'X' ? dynamicTablesPage.getXButton().should('be.enabled')
        : dynamicTablesPage.getBtns().contains(purpose).should('be.enabled')
})

Then(/^the user should see the "([^"]*)" text displayed$/, (total) => {
	dynamicTablesPage.getTotal().should('have.text', total)
})

// Scenario 2
When(/^the user clicks on the "([^"]*)" button$/, (purpose) => {
	dynamicTablesPage.clickButton(purpose)
})

Then(/^the user should see the "([^"]*)" modal with its heading$/, () => {
	dynamicTablesPage.getModalCard().should('be.visible')
	dynamicTablesPage.getModalCardHead().should('be.visible')
})

Then(/^the user should see the "([^"]*)" label$/, (label) => {
	dynamicTablesPage.getModalLabels(label).should('be.visible')
})

Then(/^the user should see the "([^"]*)" input box is enabled$/, (purpose) => {
	dynamicTablesPage.getModalInputBoxes(purpose).should('be.enabled')
})

// Scenario 3
Then(/^the user should not see the "([^"]*)" modal$/, () => {
	dynamicTablesPage.getModalCard().should('not.exist')
})

// Scenario 4
Then(/^the user enters the quantity as "([^"]*)"$/, (quantity) => {
	dynamicTablesPage.getQuantityInputBox().type(quantity)
})

Then(/^the user enters the product as "([^"]*)"$/, (item) => {
	dynamicTablesPage.getProductInputBox().type(item)
})

Then(/^the user enters the price as "([^"]*)"$/, (price) => {
	dynamicTablesPage.getPriceInputBox().type(price)
})

Then(/^the user should see the table with the new row below$/, (dataTable) => {
	const newItem = dataTable.rawTable.flat()

	dynamicTablesPage.getNewProduct().each(($el, index) => {
		cy.wrap($el).should('have.text', newItem[index])
	})

	dynamicTablesPage.getTable().should('be.visible')
})
