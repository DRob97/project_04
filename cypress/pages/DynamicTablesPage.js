class DynamicTablesPage {
    // Locators
    getInventoryHeading(){
        return cy.get('.is-size-3')
    }

    getBtns(){
        return cy.get('#add_product_btn, #submit')
    }

    getXButton(){
        return cy.get('.delete')
    }

    getTotal(){
        return cy.get('#total_amount')
    }

    getModalCard(){
        return cy.get('.modal-card')
    }

    getModalLabels(text){
        // return cy.get('label[for]')
        return cy.contains(text)
    }
    // Below is trouble
    getModalInputBoxes(){
        return cy.get('#quantity, #product, #price')
    }

    // Methods
    clickButton(purpose){
        purpose === 'X' ? this.getXButton().click()
        : this.getBtns().contains(purpose).click()
    }
    // Below is trouble
    getModalInputBoxesById(id){
        this.getModalInputBoxes().then(($el) => {
            cy.wrap($el).should('have.attr', 'id', id.toLowerCase())
        })
    }

}

module.exports = DynamicTablesPage

// return  cy.get(`#${id.toLowercase()}`)