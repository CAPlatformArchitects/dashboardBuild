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

 // cy.get('.smb-DropdownList > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon').click()
  cy.get('.alm-user-action-header > .icon-chevron-down').click()
  cy.get('span.x4-menu-item-text:contains("New Features")').click()

//  var x = cy.get('.smb-Checkbox')

  cy.get('div.smb-Checkbox',log)
  //cy.get('div.smb-Checkbox.is-checked')
  cy.get('[aria-checked=false]').click()

// great error recovery code
//function keepCalmAndCarryOn () {
  //cy.get(...).should(...).click()
//}

//cy
  //.get('#wizard').contains('Close').click()
  //.catch((err) => {
    // no problem, i guess the wizard didn't exist
    // or something... no worries
    //keepCalmAndCarryOn()
  //})
  //.then(keepCalmAndCarryOn)


 // aria-checked="true"


 // var x = cy.get('.smb-Checkbox')
  //cy.log(`this is x ${x}`)

  //cy.get('.smb-Checkbox')
  //.find('[type="checkbox"]').check()

  //cy.get('.smb-Checkbox:checked("false")')

 // <div role="checkbox" aria-label="Enable PERSONALIZED_NAVIGATION" aria-checked="false" tabindex="0" class="smb-Checkbox"></div>
  
  //.not('[disabled]').check().should('be.checked')
 // cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check().should('be.checked')

  //var y = cy.get('.smb-Checkbox[type="checkbox"]').check()       // Check checkbox element
  //cy.log(`this is x ${y}`)

//  var y = cy.get('.smb-Checkbox > checked')
//  cy.log(`this is x ${y}`)

//var y = cy.get(".smb-Checkbox").getAttribute("checked");



  //cy.get('.smb-Checkbox:checked').should('be.false')

  //cy.invoke('attr', 'checked', 'true')
  //cy.should('have.attr', 'checked', 'true')


 // cy.get('input[test]')
 // .invoke('attr', 'test', 'my new value')
 // .should('have.attr', 'test', 'my new value')


  //hasAttribute("checked");

//  div.smb-Checkbox.checked = false

    //    hold = ((pg = page[i].pageLayout) != "item.single")//if false inc i

  //<span id="menuitem-1067-textEl" class="x4-menu-item-text" unselectable="on">New Features</span>

  //if smb-Checkbox
  //checked = false
  //than check it
  //else nothing



 

  })//end of function (it) set personal nav
})// end of function (describe) add custom page

