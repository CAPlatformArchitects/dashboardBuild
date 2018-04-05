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
     0 : { "pageName": "Team Retrospective",        "pageSec": "myhome","pageLayout" : "item.two_split","pageFilter": "input#iteration_scope_radio","pageShare": "input#sharedWithAllProjects"},
     1 : { "pageName": "Estimation Board",          "pageSec": "backlogandschedules", "pageLayout" : "item.single","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     2 : { "pageName": "Planning Board",            "pageSec": "backlogandschedules", "pageLayout" : "item.single","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     3 : { "pageName": "Task Board",                "pageSec": "dashboards","pageLayout" : "item.single","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     4 : { "pageName": "IT Mgr-Dir Dashboard",      "pageSec": "myhome","pageLayout" : "item.two_split","pageFilter": "input#release_radio","pageShare": "input#sharedWithAllProjects"},
     5 : { "pageName": "Program Quality Dashboard", "pageSec": "myhome","pageLayout" : "item.two_split","pageFilter": "input#release_radio","pageShare": "input#sharedWithAllProjects"},
     6 : { "pageName": "Product Owner Dashboard",   "pageSec": "myhome","pageLayout" : "item.three_weighted_center","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     7 : { "pageName": "Team Page",                 "pageSec": "myhome","pageLayout" : "item.three_weighted_center","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     8 : { "pageName": "Iteration Health",          "pageSec": "myhome","pageLayout" : "item.two_weighted_right","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     9 : { "pageName": "Program Release",           "pageSec": "myhome","pageLayout" : "item.single","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     10 : { "pageName": "Dependency Mgmt",          "pageSec": "myhome","pageLayout" : "item.single","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     11 : { "pageName": "Individual Contributor",   "pageSec": "myhome","pageLayout" : "item.two_split","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     12 : { "pageName": "Program Dashboard",        "pageSec": "myhome","pageLayout" : "item.three_weighted_center","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     13 : { "pageName": "PI Objectives and Risks",  "pageSec": "backlogandschedules","pageLayout" : "item.two_split","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     14 : { "pageName": "ScrumMaster Dashboard",    "pageSec": "myhome","pageLayout" : "item.two_weighted_left","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     15 : { "pageName": "QA Dashboard",             "pageSec": "defectsandtests","pageLayout" : "item.three_weighted_center","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     16 : { "pageName": "Release Dependencies Grid","pageSec": "portfolio","pageLayout" : "item.single","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     17 : { "pageName": "Backlog and Release Planning","pageSec": "portfolio","pageLayout" : "item.two_split","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     18 : { "pageName": "WSJF Backlog",             "pageSec": "portfolio","pageLayout" : "item.single","pageFilter": "input#no_scope_radio","pageShare": "input#sharedWithAllProjects"},
     }
  var app = {
    0 : { "pageName": "Team Retrospective",           "appName": "Iteration Retrospective",         "appType" : "Subscription",},
    1 : { "pageName": "Team Retrospective",           "appName": "Release & Iteration Burndown",    "appType" : "Core",},
    2 : { "pageName": "Team Retrospective",           "appName": "Iteration Cumulative Flow",       "appType" : "Core",},
    3 : { "pageName": "Team Retrospective",           "appName": "Iteration Scope Change",          "appType" : "Core",},
    4 : { "pageName": "Estimation Board",             "appName": "Estimation Board (New)",          "appType" : "Subscription",},
    5 : { "pageName": "Planning Board",               "appName": "Iteration Planning Board",        "appType" : "Core",},
    6 : { "pageName": "Task Board",                   "appName": "Task Board",                      "appType" : "Core",},
    7 : { "pageName": "IT Mgr-Dir Dashboard",         "appName": "Portfolio Alignment",                      "appType" : "Core",},
    8 : { "pageName": "IT Mgr-Dir Dashboard",         "appName": "Project Cumulative Flow",                      "appType" : "Core",},
    9 : { "pageName": "Program Quality",              "appName": "Custom List",                      "appType" : "Core",},
    10 : { "pageName": "Program Quality",             "appName": "Release Defect Trend",                      "appType" : "Core",},
    11 : { "pageName": "Program Quality",             "appName": "Custom List",                      "appType" : "Core",},
    12 : { "pageName": "Program Quality",             "appName": "Custom List",                      "appType" : "Core",},
    13 : { "pageName": "Product Owner Dashboard",     "appName": "Getting Started for Organizers",                      "appType" : "Core",},
    14 : { "pageName": "Product Owner Dashboard",     "appName": "Blocked Work",                      "appType" : "Core",},
    15 : { "pageName": "Product Owner Dashboard",     "appName": "Custom List",                      "appType" : "Core",},
    16 : { "pageName": "Product Owner Dashboard",     "appName": "Release Defect Trend",                      "appType" : "Core",},
    17 : { "pageName": "Product Owner Dashboard",     "appName": "Ready to Accept",                      "appType" : "Core",},
    18 : { "pageName": "Team Page",                   "appName": "Team Capacity Grid",                      "appType" : "Core",},
    19 : { "pageName": "Team Page",                   "appName": "Iteration Planning Board",                      "appType" : "Core",},
    20 : { "pageName": "Team Page",                   "appName": "Enhanced Velocity Chart",                      "appType" : "Core",},
    21 : { "pageName": "Team Page",                   "appName": "Custom List",                      "appType" : "Core",},
    22 : { "pageName": "Team Page",                   "appName": "Iteration Tracking",                      "appType" : "Core",},
    23 : { "pageName": "Team Page",                   "appName": "Task Board",                      "appType" : "Core",},
    24 : { "pageName": "Team Page",                   "appName": "Custom List",                      "appType" : "Core",},
    25 : { "pageName": "Team Page",                   "appName": "Custom List",                      "appType" : "Core",},
    26 : { "pageName": "Iteration Health",            "appName": "Iteration Health",                      "appType" : "Core",},
    27 : { "pageName": "Program Release",             "appName": "Release Dashboard",                      "appType" : "Core",},
    28 : { "pageName": "Program Release",             "appName": "Custom List",                      "appType" : "Core",},
    29 : { "pageName": "Dependency Mgmt",             "appName": "Release Dependencies",                      "appType" : "Core",},
    30 : { "pageName": "Individual Contributor",      "appName": "My Tasks",                      "appType" : "Core",},
    31 : { "pageName": "Individual Contributor",      "appName": "Iteration Summary",                      "appType" : "Core",},
    32 : { "pageName": "Individual Contributor",      "appName": "My Defects",                      "appType" : "Core",},
    33 : { "pageName": "Individual Contributor",      "appName": "Release & Iteration Burndown",                      "appType" : "Core",},
    34 : { "pageName": "Individual Contributor",      "appName": "My Defects",                      "appType" : "Core",},
    35 : { "pageName": "Individual Contributor",      "appName": "Recent Activity",                      "appType" : "Core",},
    36 : { "pageName": "Individual Contributor",      "appName": "My Notifications",                      "appType" : "Core",},
    37 : { "pageName": "Program Dashboard",           "appName": "Project Cumulative Flow",                      "appType" : "Core",},
    38 : { "pageName": "Program Dashboard",           "appName": "Release Dashboard",                      "appType" : "Core",},
    39 : { "pageName": "Program Dashboard",           "appName": "Release & Iteration Burndown",                      "appType" : "Core",},
    40 : { "pageName": "Program Dashboard",           "appName": "Release & Iteration Burndown",                      "appType" : "Core",},
    41 : { "pageName": "Program Dashboard",           "appName": "Release & Iteration Burndown",                      "appType" : "Core",},
    42 : { "pageName": "Program Dashboard",           "appName": "Cycle/Lead Time",                      "appType" : "Core",},
    43 : { "pageName": "PI Objectives and Risks",     "appName": "Custom List",                      "appType" : "Core",},
    44 : { "pageName": "PI Objectives and Risks",     "appName": "Custom List",                      "appType" : "Core",},
    45 : { "pageName": "Team Kanban Board",           "appName": "Kanban Board",                      "appType" : "Core",},
    46 : { "pageName": "QA Dashboard",                "appName": "My Test Cases",                      "appType" : "Core",},
    47 : { "pageName": "QA Dashboard",                "appName": "Last Result by TestSet",                      "appType" : "Core",},
    48 : { "pageName": "QA Dashboard",                "appName": "Iteration Summary",                      "appType" : "Core",},
    49 : { "pageName": "QA Dashboard",                "appName": "Custom List",                      "appType" : "Core",},
    50 : { "pageName": "Release Dependencies Grid",   "appName": "Release Dependencies",                      "appType" : "Core",},
    51 : { "pageName": "Backlog and Release Planning","appName": "Custom List",                      "appType" : "Core",},
    52 : { "pageName": "Backlog and Release Planning","appName": "Release Planning Board",                      "appType" : "Core",},
    53 : { "pageName": "Backlog and Release Planning","appName": "Custom List",                      "appType" : "Core",},
    54 : { "pageName": "WSJF Backlog",                "appName": "Custom List",                      "appType" : "Core",},
    55 : { "pageName": "WSJF Backlog",                "appName": "WSJF Grid",                      "appType" : "Core",},
    56 : { "pageName": "ScrumMaster Dashboard",       "appName": "Blocked Work",                      "appType" : "Core",},
    57 : { "pageName": "ScrumMaster Dashboard",       "appName": "Release & Iteration Burndown",                      "appType" : "Core",},
    58 : { "pageName": "ScrumMaster Dashboard",       "appName": "Dependency Status Dashboard #2",                      "appType" : "Core",},
    59 : { "pageName": "ScrumMaster Dashboard",       "appName": "Unassigned Tasks for Current Iteration",                      "appType" : "Core",},
    60 : { "pageName": "ScrumMaster Dashboard",       "appName": "Enhanced Velocity Chart",                      "appType" : "Core",},
    61 : { "pageName": "ScrumMaster Dashboard",       "appName": "Incomplete Stories for Current Iteration",     "appType" : "Core",},
    }

    var plen = Object.keys(page).length
    cy.log(`the value of ${plen} and pageName is ${Object.keys(page).length}`)//just console logging
    var alen = Object.keys(app).length
    cy.log(`the value of ${alen} and pageName is ${Object.keys(app).length}`)//just console logging

       //Create Pages
       //TODO:  If page exists, do not try to create
      for (i = 0; i < 4; i++) {
        cy.visit(`/slm/wt/new.sp?projectScopeUp=false&projectScopeDown=true&pid=${page[i].pageSec}`)//new page link in specified section
     //   cy.log(`the value of ${i} and pageName is ${page[i].pageName}`)//just console logging
        cy.get('input#name').type(`${page[i].pageName}`)//name the page
        cy.get(`${page[i].pageShare}`).click()//set share specification
        cy.get(`${page[i].pageFilter}`).click()//set filter specification
        cy.get('button#save_and_close_btn.ed-btn-wide').click()//save custom page
        //cy.visit('/#/')//go to default starting page - to get to nav menu
      };

      //cy.visit('/#/')//go to default starting page - to get to nav menu

      //Create Page Layouts
    for (i = 0; i < 4; i++) {
      var layout = page[i].pageLayout
        if (layout == "item.single") {
        cy.log(`layout is:  ${page[i].pageLayout} and ${layout} : ${page[i].pageName}`)
        } else {
      cy.log(`layout is:  ${page[i].pageLayout} and ${layout} : ${page[i].pageName}`)
      cy.visit('/#/196025249156d/dashboard/')//go to default starting page - to get to nav menu
      cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()//open side nav bar
      cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()//open page options
         // cy.get(`[title="${page[i].pageName} Page Actions"] > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon`).pause()
      cy.get(`a.chr-NavigationPageTileLink:contains(${page[i].pageName})`).click()//find custom page
      cy.wait(2000) //don't want to use this, but it seems I need to in order for the next line to reliably find the gear, still researching.
      cy.get(':nth-child(1) > .smb-DropdownList > .smb-Button').click()//gear menu for page
      cy.get('span.smb-DropdownItem-text:contains("Change Layout")').click()//set column spec
      cy.get(`div.smb-PanelBody > div.chr-DashboardLayoutPicker > div.chr-DashboardLayoutPicker-${page[i].pageLayout}`).click()//add layout as specified

//      cy.get('.chr-NavigationSubmenuContainer > .chr-ComponentsSideBar-header > [title="Close"] > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon').click()
//[title="Shopping Team Pages"] > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon
    }
   
      };

    //Add Apps to Pages
    for (i = 0; i < alen; i++) {
     // var sold, pi, pj;
     // sold = ((pi = app[i].pageName) = (pj = app[i-1].pageName))//if true just get gear, skip finding page
     // cy.log(`logs: ${i}, ${i-1}, ${pi}, ${pj}, ${sold} , pageLayout: ${app[i].pageName}`)//just console logging
     //TODO: If app is on same page, don't search, add this.
      cy.visit('/#/196025249156d/dashboard/')//go to default starting page - to get to nav menu
      cy.get('.chr-NavigationHeader-menuButtonTitleDiv').click()//open side nav bar
      cy.get('.chr-NavigationSidebarPagesHeader-ellipsisButton').click()//open page options
      cy.get(`a.chr-NavigationPageTileLink:contains(${app[i].pageName})`).click()//find custom page
      cy.wait(2000) //don't want to use this, but it seems I need to in order for the next line to reliably find the gear, still researching.
      //cy.get('.smb-DropdownList > .smb-Button > .smb-Button-contents > .smb-Button-icon > .smb-Icon').click()
      cy.get(':nth-child(1) > .smb-DropdownList > .smb-Button').click()//gear menu for page
      cy.get("span.smb-DropdownItem-text:contains('Add App')").click()//Add App
      cy.get('span.smb-Icon.smb-Icon--grid').click()
      cy.get(`tr.smb-TableRow:contains("${app[i].appName}") > td.smb-TableCell.u-textLeft > button.smb-Button.smb-Button--primary.smb-Button--sm.chr-AppAddButton > div.smb-Button-contents > span.smb-Button-children`).click()
      //cy.visit('/#/')//go to default starting page - to get to nav menu
    }

  })//end of function (it) adds custom page
})// end of function (describe) add custom page

