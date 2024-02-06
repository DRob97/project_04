class DynamicTablesPage {
    // Locators
    getInventoryHeading(){
        return cy.get('.is-size-3')
    }

    getBtns(){
        return cy.get('#add_product_btn, #submit')
    }

    getTableHeaders(){
        return cy.get('.header')
    }

    getTableData(){
        return cy.get('td')
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

    getModalCardHead(){
        return cy.get('.modal-card-head')
    }

    getModalLabels(text){
        return cy.contains(text)
    }
    
    getQuantityInputBox(){
        return cy.get('#quantity')
    }

    getProductInputBox(){
        return cy.get('#product')
    }

    getPriceInputBox(){
        return cy.get('#price')
    }

    getNewProduct(){
        return cy.get('tbody > tr').last().children()
    }

    getTable(){
        return cy.get('#product_table')
    }

    // Methods
    clickButton(purpose){
        purpose === 'X' ? this.getXButton().click()
        : this.getBtns().contains(purpose).click()
    }
    
    getModalInputBoxes(purpose){
        switch(purpose){
            case 'Quantity':
                return this.getQuantityInputBox()
            case 'Product':
                return this.getProductInputBox()
            case 'Price':
                return this.getPriceInputBox()
            default:
                throw new Error(`${purpose} input box not found`)
        }
    }
}

module.exports = DynamicTablesPage