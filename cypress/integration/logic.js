  describe('Add Custom Pages', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
        })

        
  it('set personal nav', function(){

    cy.request('/slm/webservice/v2.x/featuretoggle/beta/?').pause()

    cy.request('/slm/webservice/v2.x/featuretoggle/beta/?').its('body').should('include', "Enabled")

    //cy.request('/slm/webservice/v2.x/featuretoggle/beta/?', {Enabled})
       
    //cy.request('/slm/webservice/v2.x/featuretoggle/beta/?[Enabled: false]')
    
    //cy.request('.alm-user-action-header > .icon-chevron-down')
    
    if (cy.request('/slm/webservice/v2.x/featuretoggle/beta/?["Enabled"=false]')){

    var x = false
    cy.log(`this is chk:  ${x}`)

  } else {

    var x = true
    cy.log(`this is chk:  ${x}`).pause()

  }

    //(['aria-checked=false'])

      if (cy.get('.alm-user-action-header > .icon-chevron-down')) {
        // do this personal nav is off:
        cy.get('.alm-user-action-header > .icon-chevron-down').click()
        cy.get('span.x4-menu-item-text:contains("New Features")').click()
        cy.get('div.smb-Checkbox')

    
        var x = cy.get('[aria-checked]')
        var chk = false
    
         cy.log(`this is chk:  ${chk}`)
         cy.log(`this is chk:  ${x}`)
    
    
      } else {
        // do personal nav is on:
        cy.get('chr-NavigationProfileMenu-avatar').click()
        cy.get('span.x4-menu-item-text:contains("New Features")').click()
        cy.get('div.smb-Checkbox')  
    
        var x = cy.get('[aria-checked]')
        var chk = true
    
         cy.log(`this is chk:  ${chk}`)
         cy.log(`this is chk:  ${x}`)
    
         //class="chr-NavigationProfileMenu-avatar"
       
      }
  
  })//end of function (it) set personal nav
})// end of function (describe) add custom page

