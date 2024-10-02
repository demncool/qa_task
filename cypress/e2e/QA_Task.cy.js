import objects from "../Pages/objects"

const actions = new objects

describe("Test Form", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Verify Form", () => {
    // const data = {
    //   name: "QA",
    //   lastName: "Test",
    //   email: "qa_test@gmail.com",
    //   mobileNumber: "9334876353",
    //   subject: "Computer Science",
    //   currentAddress: "Test Address",
    // }

    actions.verifyForm("qa_test@gmail.com")

    // Verify the submission
    cy.get(".modal-content").should("be.visible")
    cy.get(".modal-title").should("contain", "Thanks for submitting the form")
  })

  it("Verify if the form will not submit if empty", () => {
    cy.get("#submit").click()
    cy.get(".modal-content").should("not.exist")
  })

  it("Verify Invalid Email Error is Working", () => {
    actions.verifyForm("qa_testgmail.com")

    // verify if email field border turns red
    cy.get("#userEmail").should("have.css", "border-color", "rgb(220, 53, 69)")

    // check if modal is not visible
    cy.get(".modal-content").should("not.exist")
  })
})