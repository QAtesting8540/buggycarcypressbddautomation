import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "C:/santhi/Cypress/BuggyCarsRating/cypress/Pages/loginpage"

let loginpage = new LoginPage()


Given('A user opens the website', () => {
    cy.visit('/')
})

When('The user types unregistered username and password and clicks Login', () => {
    loginpage.enterInvalidUser('Test')
    loginpage.enterPassword()
    loginpage.clickLogin()

})

Then('The user error message {string} is displayed', (errormessage) => {
    
    loginpage.elements.loginpage_errorMessage().should("contains.text", errormessage)
})

When('The user types username and password and clicks Login', () => {

    loginpage.enterValidUser()
    loginpage.enterPassword()
    loginpage.clickLogin()
})


Then('The user can see that they are logged in', () => {
    loginpage.checkFirstName()
})

