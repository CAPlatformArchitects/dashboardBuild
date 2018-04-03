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
 it('adds a custom page', function(){
  var pageName, pageSec, pageLayout, pageFilter, pageShare, appName, appType, i;
  var page = {
     0 : { "pageName": "Team Retrospective", "pageSec": "myhome",              "pageLayout" : "item.two_split",           "pageFilter": "input#iteration_scope_radio",    "pageShare": "input#sharedWithAllProjects"},
     1 : { "pageName": "Estimation Board",   "pageSec": "backlogandschedules", "pageLayout" : "item.single",              "pageFilter": "input#no_scope_radio",           "pageShare": "input#sharedWithAllProjects"},
     2 : { "pageName": "Planning Board",     "pageSec": "backlogandschedules", "pageLayout" : "item.single",              "pageFilter": "input#no_scope_radio",           "pageShare": "input#sharedWithAllProjects"},
     3 : { "pageName": "Task Board",         "pageSec": "dashboards",          "pageLayout" : "item.single",              "pageFilter": "input#no_scope_radio",           "pageShare": "input#sharedWithAllProjects"},
    }
  var app = {
    0 : { "pageName": "Team Retrospective",   "appName": "Iteration Retrospective",         "appType" : "Subscription",},
    1 : { "pageName": "Team Retrospective",   "appName": "Release & Iteration Burndown",    "appType" : "Core",},
    2 : { "pageName": "Team Retrospective",   "appName": "Iteration Cumulative Flow",       "appType" : "Core",},
    3 : { "pageName": "Team Retrospective",   "appName": "Iteration Scope Change",          "appType" : "Core",},
    4 : { "pageName": "Estimation Board",     "appName": "Estimation Board (New)",          "appType" : "Subscription",},
    5 : { "pageName": "Planning Board",       "appName": "Iteration Planning Board",        "appType" : "Core",},
    6 : { "pageName": "Task Board",           "appName": "Task Board",                      "appType" : "Core",},
    }
    //Create Pages
      for (i = 0; i < 4; i++) {
        cy.visit(`/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=${page[i].pageSec}`)//new page link in specified section
     //   cy.log(`the value of ${i} and pageName is ${page[i].pageName}`)//just console logging
        cy.get('input#name').type(`${page[i].pageName}`)//name the page
        cy.get(`${page[i].pageShare}`).click()//set share specification
        cy.get(`${page[i].pageFilter}`).click()//set filter specification
        cy.get('button#save_and_close_btn.ed-btn-wide').click()//save custom page
      };
      cy.visit('/slm/')//go to default starting page - to get to nav menu
    //Create Page Layouts
    //for (i = 0; (((pg = page[i].pageLayout) != "item.single") && (i < 4)); i++) {
    for (i = 0; i < 4; i++) {
  //    var hold, pg;
  //    hold = ((pg = page[i].pageLayout) != "item.single")//if false inc i
   //   cy.log(`logs: ${i}, ${pg}, ${hold}, pageName: ${page[i].pageName}, pageLayout: ${page[i].pageLayout}`)//just console logging
      cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()//open side nav bar
      cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()//open page options
      cy.get(`a.chr-NavigationPageTileLink:contains(${page[i].pageName})`).click()//find custom page
      cy.wait(3000) //don't want to use this, but it seems I need to in order for the next line to reliably find the gear, still researching.
//      old: cy.get('div.smb-DropdownList.smb-DropdownList--bottom.smb-DropdownList--right.smb-Dropdown.smb-DropdownMenu > button.smb-Button.smb-Button--icon.smb-Button--lg > div.smb-Button-contents > span.smb-Button-icon > span.smb-Icon.smb-Icon--gear').click()
//      '.smb-DropdownList > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon'
      cy.get(':nth-child(1) > .smb-DropdownList > .smb-Button').click()//gear menu for page
      cy.get('span.smb-DropdownItem-text:contains("Change Layout")').click()//set column spec
      cy.get(`div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-${page[i].pageLayout}`).click()//add layout as specified
      cy.visit('/slm/')//go to default starting page - to get to nav menu
      };

    //Add Apps to Pages
    for (i = 0; i < 7; i++) {
     // var sold, pi, pj;
     // sold = ((pi = app[i].pageName) = (pj = app[i-1].pageName))//if true just get gear, skip finding page
     // cy.log(`logs: ${i}, ${i-1}, ${pi}, ${pj}, ${sold} , pageLayout: ${app[i].pageName}`)//just console logging
      cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()//open side nav bar
      cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()//open page options
      cy.get(`a.chr-NavigationPageTileLink:contains(${app[i].pageName})`).click()//find custom page
      cy.wait(3000) //don't want to use this, but it seems I need to in order for the next line to reliably find the gear, still researching.
      //cy.get('.smb-DropdownList > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon').click()
      cy.get(':nth-child(1) > .smb-DropdownList > .smb-Button').click()//gear menu for page
      cy.get("span.smb-DropdownItem-text:contains('Add App')").click()//Add App
      cy.get('span.smb-Icon.smb-Icon--grid').click()
      cy.get(`tr.smb-TableRow:contains("${app[i].appName}") > td.smb-TableCell.u-textLeft > button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton > div.smb-Button-contents > span.smb-Button-children`).click()
      cy.visit('/slm/')//go to default starting page - to get to nav menu
    }

  })//end of function (it) adds custom page
})// end of function (describe) add custom page

