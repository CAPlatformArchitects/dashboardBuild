  describe('Add Custom Pages', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
        })

  it('set personal nav', function(){
  
    cy.get('.alm-user-action-header > .icon-chevron-down')
    if (['aria-checked=false']) {
      var chk = false
      cy.log(`this is chk:  ${chk}`)

    } else {
      var chk = true
      cy.log(`this is chk:  ${chk}`)

    }
  
  })//end of function (it) set personal nav
})// end of function (describe) add custom page

