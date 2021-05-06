
describe('User navigates to sign up link', function(){
    beforeEach(function() {
    cy.task("resetDb")
  })
  it('user navigates to index page', function(){
      cy.visit('/')
      cy.contains('Sign up')
  })
it('user navigates to bookmarks page', function(){
      cy.visit('/bookmarks')
      cy.contains('Sign up')
  })
  it('user navigates to tags page', function(){
      cy.visit('/tags:news')
      cy.contains('Sign up')
  })
it('user clicks sign up link', function(){
      cy.visit('/')
      cy.get('#sign-up').click()
      cy.url().should('include', '/registrations') 
      cy.contains('Name')
  })

})