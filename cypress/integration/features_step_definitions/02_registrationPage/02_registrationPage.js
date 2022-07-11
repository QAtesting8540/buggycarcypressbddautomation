import { Registeration } from "C:/santhi/Cypress/BuggyCarsRating/cypress/Pages/registrationpage"
import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps";

let registration = new Registeration()

Given('A new user opens the website', () => {
    cy.visit('/')

})

When('The user clicks on the Register button', () => {

    registration.clickRegisterButton()
})

And('The user enters password without uppercase and clicks Submit', () => {
    registration.generaterandoemUser()
    registration.enterFirstname('firstname')
    registration.enterLastname('lastname')
    registration.Password_UppercaseCheck()
    registration.clickRegister()

})



And('The user enters password without lowecase and clicks Submit', () => {
    registration.generaterandoemUser()
    registration.enterFirstname('firstname')
    registration.enterLastname('lastname')
    registration.Password_LowercaseCheck()
    registration.clickRegister()

})



And('The user enters password without special characters and clicks Submit', () => {
    registration.generaterandoemUser()
    registration.enterFirstname('firstname')
    registration.enterLastname('lastname')
    registration.Password_SpecialcharCheck()
    registration.clickRegister()

})



And('The user enters password without numeric value and clicks Submit', () => {
    registration.generaterandoemUser()
    registration.enterFirstname('firstname')
    registration.enterLastname('lastname')
    registration.Password_NumericCheck()
    registration.clickRegister()

})



And('The user enters password lessthan 8 characters and clicks Submit', () => {
    registration.generaterandoemUser()
    registration.enterFirstname('firstname')
    registration.enterLastname('lastname')
    registration.Password_LengthCheck()
    registration.clickRegister()

})




And('The user enters all the details required and clicks Submit', () => {
    registration.generaterandoemUser()
    registration.enterFirstname('firstname')
    registration.enterLastname('lastname')
    registration.valid_Password()
    registration.clickRegister()

})



And('The user enters existing user details required and clicks Submit', () => {
    registration.enterUserName('Testuserexists')
    registration.enterFirstname('user')
    registration.enterLastname('exists')
    registration.enterPassword()
    registration.clickRegister()

})

Then('The user error message {string} is displayed', (errormessage) => {

    registration.elements.registration_message().should("contain.text", errormessage)

})

Then('The user Registration is successful', () => {
    registration.elements.registration_message().should("contain.text", "Registration is successful")

})
