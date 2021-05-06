
describe('User navigates to sign up link', function(){
    beforeEach(function() {
    cy.task("resetDb")
    cy.visit('/')
  })
  it('user navigates to index page', function(){
      cy.contains('Sign up')
  })
it('user navigates to bookmarks page', function(){
      cy.visit('/bookmarks')
      cy.contains('Sign up')
  })
it('user clicks sign up link', function(){
      cy.get('#sign-up').click()
      cy.url().should('include', '/registrations') 
      cy.contains('Email')
  })
  it('user clicks sign up link and registration is successful', function(){
      cy.get('#sign-up').click()
      cy.url().should('include', '/registrations') 
      cy.get('#email-input').type('www.boldi.petra@gmail.com')
      cy.get('#password-input').type('software')
      cy.get('#submit').click()
      cy.url().should('include', '/bookmarks') 
  })
  it('user clicks sign up link and registration is unsuccessful', function(){
      cy.get('#sign-up').click()
      cy.url().should('include', '/registrations') 
      cy.get('#email-input').type('www.boldi.petra@gmai.com')
      cy.get('#password-input').type('software')
      cy.get('#submit').click()
      cy.url().should('include', '/') 
  })
    it('user clicks sign up link and registration is successful', function(){
      cy.get('#sign-up').click()
      cy.url().should('include', '/registrations') 
      cy.get('#email-input').type('www.boldi.petra@gmail.com')
      cy.get('#password-input').type('software')
      cy.get('#submit').click()
      cy.url().should('include', '/bookmarks') 
      cy.get('#bookmark-textbox').type("www.new.com")
      cy.get('#bookmark-submit').click()
      cy.get('#bookmarks').should("contain", "www.new.com")
  })

})


