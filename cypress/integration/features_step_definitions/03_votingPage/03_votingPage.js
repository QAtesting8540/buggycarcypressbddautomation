import { Given, When, Then, And, Before, After } from "cypress-cucumber-preprocessor/steps";
import { Registeration } from "C:/santhi/Cypress/BuggyCarsRating/cypress/Pages/registrationpage"
import { LoginPage } from "C:/santhi/Cypress/BuggyCarsRating/cypress/Pages/loginpage"
import { CarVoting } from "C:/santhi/Cypress/BuggyCarsRating/cypress/Pages/votingpage"

let registration = new Registeration()
let loginpage = new LoginPage()
let carvoting = new CarVoting()


Given('A newly registered user opens the website', () => {
    cy.visit('/')


    //click register button and create new user to vote
    registration.clickRegisterButton()
    registration.generaterandoemUser()
    registration.enterFirstname('firstname')
    registration.enterLastname('lastname')
    registration.valid_Password()
    registration.clickRegister()

    registration.elements.registration_message().should("contain.text", "Registration is successful")

    carvoting.buggyRating()

    //login with the registered user
    cy.get("@username").then((username) => {
        loginpage.elements.logipage_username().type(username)
    })
    cy.get("@password").then((password) => {
        loginpage.elements.loginpage_password().type(password)
    })

    loginpage.clickLogin()
})

When('The user clicks on the current Popular Model on homepage', () => {
    carvoting.popularModel()
})

And('The user types a comment to vote', () => {
    //store number of votes to verify count after comment added
    cy.intercept('GET', '/prod/models/*').as('route');
    cy.wait(['@route'])
    cy.contains("Specification").parent('div').parent('div').parent('div')
        .within(() => {
            cy.get('h4').contains("Votes: ").then(($h4) => {
                var voteCountStr = $h4.text().replace("Votes: ", "")
                cy.wrap(voteCountStr).as("oldVoteCountStr")
            })
        })
    carvoting.entertextmessage()
    carvoting.clickVote()
})

Then('The user can see their comment and the vote count is incremented up', () => {
    cy.get('@messageString').then((messageString) => {
        cy.contains(messageString)
    })

    cy.intercept('GET', '/prod/models/*').as('route');
    cy.wait(['@route'])
    cy.contains("Specification").parent('div').parent('div').parent('div')
        .within(() => {
            cy.get('h4').contains("Votes: ").then(($h4) => {
                var voteCountStr = $h4.text().replace("Votes: ", "")
                cy.get('@oldVoteCountStr').then((oldVoteCountStr) => {
                    expect(parseInt(voteCountStr)).to.be.greaterThan(parseInt(oldVoteCountStr))
                })
            })
        })
})

