class objects {

    // selector encapsulation
    formSelector = {
        firtName: () => cy.get("#firstName"),
        lastName: () => cy.get("#lastName"),
        email: () => cy.get("#userEmail"),
        gender: () => cy.get('[type="radio"]'),
        mobileNumber: () => cy.get("#userNumber"),
        bdayDropdown: () => cy.get("#dateOfBirthInput"),
        bdayMonth: () => cy.get(".react-datepicker__month-select"),
        bdayYear: () => cy.get(".react-datepicker__year-select"),
        bdayDate: () => cy.get(".react-datepicker__month"),
        subject: () => cy.get(".subjects-auto-complete__value-container"),
        hobbies: () => cy.get('[type = "checkbox"]'),
        uploadPictureBtn: () => cy.get("#uploadPicture"),
        currentAddress: () => cy.get("#currentAddress"),
        state: () => cy.get("#state > .css-yk16xz-control > .css-1hwfws3"),
        city: () => cy.get("#stateCity-wrapper > :nth-child(3)"),
        submitBtn: () => cy.get("#submit")
    }


    verifyForm(email) {
        // initialize selectors
        const selector = this.formSelector

        selector.firtName().type("QA")
        selector.lastName().type("Tester")
        selector.email().type(email)
        selector.gender().first().check({ force: true }).should("be.checked")
        selector.mobileNumber().type("9334876353")


        selector.bdayDropdown().click()
        selector.bdayMonth().select("January")
        selector.bdayYear().select("2000")
        selector.bdayDate().contains("15").click({ force: true })


        selector.subject().type("Computer Science{enter}")


        selector.hobbies().first().check({ force: true }).should("be.checked")

        selector.uploadPictureBtn().selectFile("cypress/fixtures/test.jpg")

        selector.currentAddress().type("Test Address")

        selector.state().click()
        cy.contains("Haryana").click()
        selector.city().click()
        cy.contains("Panipat").click()

        //submit
        selector.submitBtn().click()
    }


    verifyInvalidEmailError() {

    }

}
module.exports = objects