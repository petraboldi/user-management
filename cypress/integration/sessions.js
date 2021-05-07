describe('User starts a session', function(){
    beforeEach(function() {
    cy.task("resetDb")
    cy.task("createUser")
    cy.visit('/')
  })
  it('sign in link is visible on index page', function(){
      cy.contains('Sign in')
  })
it('user clicks sign in link', function(){
      cy.get('#sign-in').click()
      cy.get('#email-input').should('be.visible')
      cy.get('#password-input').should('be.visible')
      cy.get('#submit').should('be.visible')
  })
it('user enters valid login details', function(){
      cy.get('#sign-in').click()
      cy.get('#email-input').type('boldi.petra@gmail.com')
      cy.get('#password-input').type('software')
      cy.get('#submit').click()
      cy.url().should('include', '/bookmarks') 
  })
  it('user enters invalid login details', function(){
      cy.get('#sign-in').click()
      cy.get('#email-input').type('boldi.petra@gmail.com')
      cy.get('#password-input').type('hello')
      cy.get('#submit').click()
      cy.url().should('include', '/sessions') 
  })
   it('user enters valid login details and sees sign out button', function(){
      cy.get('#sign-in').click()
      cy.get('#email-input').type('boldi.petra@gmail.com')
      cy.get('#password-input').type('software')
      cy.get('#submit').click()
      cy.url().should('include', '/bookmarks') 
      cy.contains('Sign out')
  })
     it('user click the sign out button', function(){
      cy.get('#sign-in').click()
      cy.get('#email-input').type('boldi.petra@gmail.com')
      cy.get('#password-input').type('software')
      cy.get('#submit').click()
      cy.url().should('include', '/bookmarks') 
      cy.get('#sign-out').click()
      cy.url().should('include', '/') 
      cy.contains('Sign in')

  })

})