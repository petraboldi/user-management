describe("Bookmarks", function() {
  beforeEach(function() {
    cy.task("resetDb")
    cy.visit('/bookmarks')
  })

  it("Creates a new bookmark with tags and shows all bookmarks", function() {
    cy.get('#bookmark-textbox').type("www.bbc.com")
    cy.get('#bookmark-tags-textbox').type("news uk")
    cy.get('#bookmark-submit').click()
    cy.get('#bookmarks').should("contain", "news")
    cy.get('#bookmarks').should("contain", "uk")
  })
})
