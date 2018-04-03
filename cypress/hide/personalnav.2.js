//Author: J. Wagner AJSE-E
//Date: originated 2/26/2018
//SCM: GitHub CAPlatformArchitects acct
//Purpose: This code is to provide an example of adding a custom page and an app to a page.
  //This code will be built on to automate dashboard creation for demo workspaces.
  //This sampel is also used to verify the CL scripting requred to automate dashboard creation with
  //the automated creation of workspaces.

  //need workspace as input and re-write for page create first, then App to page.
  //ability to apss in workspace perameter.
  

  describe('Add Custom Pages', function(){
    before(function(){
        cy.visit('/slm/login.op', { timeout: 20000 })
          .get('#j_username').type('testme@acme.com').should("have.value", "testme@acme.com")
          .get('#j_password').type('testme33').should("have.value", "testme33")
          .get('#login-button').click()
          //TODO: obvuscate username and password
          //TODO: parameter to run this for workspace under creation
          //TODO: pass in parameter to run this for projectid? for custom page creation in the proper place
          //TODO: resolve personal navigation settings issue
          //TODO: resolve "for" loop processing with new matrix
          //TODO: make add apps function more efficient, avoid re-search by simply doing if equals, then add app only.
                  //can also use above to add to existing, don't re-create and don't re-search for page layout section as well.
          //TODO: move page layout to add app section after I fix the re-search issue.
                  //Note: "not secure" message OK when running, Cypress modifies traffic hense the message.
        })

  it('set personal nav', function(){
  if (cy.get('.alm-user-action-header > .icon-chevron-down')) {
    // do this personal nav is off:
    cy.click('.alm-user-action-header > .icon-chevron-down')
    cy.get('span.x4-menu-item-text:contains("New Features")').click()
    cy.get('div.smb-Checkbox')

    var x = cy.get('[aria-checked]').click()
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
 // 'img.chr-NavigationProfileMenu-avatar'
 // cy.get('.smb-DropdownList > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon').click()
 cy.get('#x4-gen1028 > img').click()
 //cy.get('.alm-user-action-header > .icon-chevron-down').click()
  cy.get('span.x4-menu-item-text:contains("New Features")').click()


  cy.get('div.smb-Checkbox')
    
  cy.get('[aria-checked]')
    if (['aria-checked=false']) {
      // do something if its active
      var chk = false
     //cy.get('.alm-user-action-header > .icon-chevron-down').click()

      cy.log(`this is chk:  ${chk}`)

    } else {
      var chk = true
      //class="chr-NavigationProfileMenu-avatar"
      cy.log(`this is chk:  ${chk}`)

      // do something else
    }

 
  })//end of function (it) set personal nav
})// end of function (describe) add custom page

