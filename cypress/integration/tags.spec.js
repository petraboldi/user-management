describe("Bookmarks", function() {
  beforeEach(function() {
    cy.task("resetDb")
  })

  it("Creates a new bookmark with tags and shows all bookmarks", function() {
    cy.visit('/bookmarks')

    cy.get('#bookmark-textbox').type("www.bbc.com")
    cy.get('#bookmark-tags-textbox').type("news uk")
    cy.get('#bookmark-submit').click()
    cy.get('#bookmarks').should("contain", "news")
    cy.get('#bookmarks').should("contain", "uk")
  })

  it("shows associated bookmarks when you click on a tag", function() {
    cy.task("createBookmarksWithTags")

    cy.visit('/bookmarks')
    cy.get('#bookmarks-tags-1').click()
    cy.get('#bookmark-0').should("contain", "www.bbc.co.uk")
    cy.get('#bookmark-1').should("contain", "www.google.co.uk")

    cy.visit('/bookmarks')
    cy.get('#bookmarks-tags-0').click()
    cy.get('#bookmark-0').should("contain", "www.bbc.co.uk")
    cy.get('#bookmark-1').should("not.exist")
  })
})
