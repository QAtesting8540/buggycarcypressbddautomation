export class Registeration {

    elements = {

        register_button: () => cy.get('a[href*="/register"]'),
        registeration_username: () => cy.get('input[name=username]'),
        registration_firstname: () => cy.get('input[name=firstName]'),
        registration_lastname: () => cy.get('input[name=lastName]'),
        registration_password: () => cy.get('input[name=password]'),
        registration_confirmpassword: () => cy.get('input[name=confirmPassword]'),
        registration_register: () => cy.get('button[type="submit"]'),
        registration_message: () => cy.get('div'),
    }


    clickRegisterButton() {
        this.elements.register_button().click()
    }

    generaterandoemUser() {

        function generate_random_string(string_length) {
            let random_string = '';
            let random_ascii;
            for (let i = 0; i < string_length; i++) {
                random_ascii = Math.floor((Math.random() * 25) + 97);
                random_string += String.fromCharCode(random_ascii)
            }
            return random_string
        }
        var randomUser = generate_random_string(8)
        cy.wrap(randomUser).as("username")
        this.elements.registeration_username().type(randomUser)


    }

    enterUserName(username) {
        this.elements.registeration_username().type(username)
    }

    enterFirstname(firstname) {
        cy.wrap(firstname).as("firstname")
        this.elements.registration_firstname().type(firstname)
    }

    enterLastname(lastname) {
        cy.wrap(lastname).as("lastname")
        this.elements.registration_lastname().type(lastname)
    }

    enterPassword(password) {
        var password = 'P@#sw0rd'

        cy.contains("Register with Buggy Cars Rating").parent('div')
            .within(() => {
                this.elements.registration_password().type(password)
                this.elements.registration_confirmpassword().type(password)

            })
    }

    valid_Password() {
        const uuid = () => Cypress._.random(0, 1e3)
        const id = uuid()
        var newPassword = `newPassword${id}` + "$"

        cy.contains("Register with Buggy Cars Rating").parent('div')
            .within(() => {
                this.elements.registration_password().type(newPassword)
                this.elements.registration_confirmpassword().type(newPassword)
                cy.wrap(newPassword).as("password")
            })
    }

    Password_UppercaseCheck() {
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        var upperPassword = `abcd${id}` + "$"

        cy.contains("Register with Buggy Cars Rating").parent('div')
            .within(() => {
                this.elements.registration_password().type(upperPassword)
                this.elements.registration_confirmpassword().type(upperPassword)

            })
    }


    Password_LowercaseCheck(lowerPassword) {
        const uuid = () => Cypress._.random(0, 1e3)
        const id = uuid()
        var lowerPassword = `ABCD${id}` + "$"

        cy.contains("Register with Buggy Cars Rating").parent('div')
            .within(() => {
                this.elements.registration_password().type(lowerPassword)
                this.elements.registration_confirmpassword().type(lowerPassword)

            })
    }

    Password_SpecialcharCheck() {
        const uuid = () => Cypress._.random(0, 1e3)
        const id = uuid()
        var specialcharPassword = `AVswd${id}`

        cy.contains("Register with Buggy Cars Rating").parent('div')
            .within(() => {
                this.elements.registration_password().type(specialcharPassword)
                this.elements.registration_confirmpassword().type(specialcharPassword)

            })
    }
    Password_NumericCheck() {

        var numericPassword = `AVswdwe` + "@"

        cy.contains("Register with Buggy Cars Rating").parent('div')
            .within(() => {
                this.elements.registration_password().type(numericPassword)
                this.elements.registration_confirmpassword().type(numericPassword)

            })
    }

    Password_LengthCheck() {
        const uuid = () => Cypress._.random(0, 0e3)
        const id = uuid()
        var passwordLength = `Aswe${id}` + "@"

        cy.contains("Register with Buggy Cars Rating").parent('div')
            .within(() => {
                this.elements.registration_password().type(passwordLength)
                this.elements.registration_confirmpassword().type(passwordLength)

            })
    }

    clickRegister() {
        this.elements.registration_register().contains("Register").click()
    }


}