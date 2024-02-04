const { Given } = require('@badeball/cypress-cucumber-preprocessor')

Given(/^user navigates to "([^"]*)"$/, (url) => {
	cy.visit(url)
})
