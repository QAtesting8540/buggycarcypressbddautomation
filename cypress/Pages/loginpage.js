export class LoginPage {

    elements = {
        logipage_username: () => cy.get('input[name=login]'),
        loginpage_password: () => cy.get('input[name=password]'),
        loginpage_loginButton: () => cy.get('button[type="submit"]'),
        loginpage_firstName: () => cy.get('span'),
        loginpage_errorMessage: ()=> cy.get('span'),

    }

    enterValidUser() {
        cy.wrap(Cypress.env('username')).as("username")
        cy.get("@username").then((username) => {
            this.elements.logipage_username().type(username)
        })
    }

    enterInvalidUser(username) {
        this.elements.logipage_username().type(username)
    }

    enterPassword() {
        cy.wrap(Cypress.env('password')).as("password")
        cy.get("@password").then((password) => {
            this.elements.loginpage_password().type(password)
        })

    }
    clickLogin() {

        this.elements.loginpage_loginButton().click()
    }

    checkFirstName() {
        cy.wrap(Cypress.env('firstName')).as("firstName")
        cy.get('@firstName').then((firstName) => {
            this.elements.loginpage_firstName().contains(firstName)
        })
    }

}