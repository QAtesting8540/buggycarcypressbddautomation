export class CarVoting {



    buggyRating() {
        cy.get('div').contains("Buggy Rating").click()
    }

    popularMake() {
        cy.contains("Popular Make").parent('div')
            .within(() => {
                cy.get('img').click()
            })

    }

    popularModel() {
        cy.contains("Popular Model").parent('div')
            .within(() => {
                cy.get('img').click()
            })

    }

    overallRating() {
        cy.contains("Overall Rating").parent('div')
            .within(() => {
                cy.get('img').click()
            })

    }

    entertextmessage() {
        const ranId = () => Cypress._.random(0, 1e3)
        const id = ranId()
        var messageString = "This car is the most popular model today." + id
        cy.wrap(messageString).as("messageString")
        cy.get('textarea').type(messageString)
    }

    clickVote() {
        cy.get('button').contains("Vote!").click()
    }


}