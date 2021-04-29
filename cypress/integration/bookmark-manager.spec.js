describe("Bookmarks", function() {
  beforeEach(function() {
    cy.task("resetDb")
    cy.visit('/bookmarks')
  })

  it("Creates a new bookmark and shows all bookmarks", function() {
    cy.get('#bookmark-textbox').type("www.new.com")
    cy.get('#bookmark-submit').click()
    cy.get('#bookmarks').should("contain", "www.new.com")
  })

  it("deletes a bookmark and then shows all bookmarks", function() {
    cy.get('#bookmark-textbox').type("www.new.com")
    cy.get('#bookmark-submit').click()
    cy.get('#bookmark-0').should("contain", "www.new.com")
    cy.get('#bookmark-0-delete').click()
    cy.get('#bookmark-0').should('not.exist')
  })

  it("updates a bookmark and then shows all bookmarks", function() {
    cy.get('#bookmark-textbox').type("www.old.com")
    cy.get('#bookmark-submit').click()
    cy.get('#bookmark-0').should("contain", "www.old.com")
    cy.get('#bookmark-0-edit').click()
    cy.get('#bookmark-edit-textbox').type("www.updated.com")
    cy.get('#bookmark-edit-submit').click()
    cy.get('#bookmark-0').should("contain", "www.updated.com")
  })
})
