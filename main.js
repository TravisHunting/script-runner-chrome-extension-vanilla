/*global chrome*/


// Add a reference popup with ACT Driver's license, TFN number, ABN, ACN
// Add a function to log you out of the site with a radio button for Dev1 and Test1

let personalScripts = new Map();
// enable-scroll use case:
// When you load a website that locks you out with a massive ad / paywall and disables scrolling
// I use an adblocker or devtools to hide the ads/paywall and then re-enable scrolling
personalScripts.set("enable-scroll", function() { document.body.style.overflow = 'auto'; })

let miscScripts = new Map();
miscScripts.set("Load jQuery", loadJQuery)

// Due to sandboxing/security constraints (I think), you can't access a page's jQuery functions from a chrome extension
// To get around this you need to inject jQuery using the 'loadjQuery' function
// Ideally I would have re-written the onboarding scripts to not need jQuery, but that was too much effort
let onboardingScripts = new Map()
onboardingScripts.set("Individual", async function() {
  $(".entity-wizard-type-individual").click();
  $("#stage1continue")[0].click();
  $(".entity-wizard-type-Cash").click();
  $("#stage2continue")[0].click();
  $(".entity-wizard-type-noaccount").click();
  $("#GivenName").val("RAFLAGTEST").valid();
  $("#FamilyName").val("Rujzl").valid();
  $("#Mobile").val("0439295670").valid();
  $("#ConfirmMobile").val("0439295670").valid();
  $("#Email").val("travis.hunting@fnz.com").valid();
  $("#ConfirmEmail").val("travis.hunting@fnz.com").valid();
  $("#Submit")[0].click();
})
onboardingScripts.set("Joint", async function() {
  $(".entity-wizard-type-joint").click();
  $("#stage1continue")[0].click();
  $(".entity-wizard-type-applicants2").click();
  $(".entity-wizard-type-Cash").click();
  $("#stage2continue")[0].click();
  $(".entity-wizard-type-noaccount").click();
  $("#GivenName").val("Pavel").valid();
  $("#FamilyName").val("Rujzl").valid();
  $("#Mobile").val("0439295670").valid();
  $("#ConfirmMobile").val("0439295670").valid();
  $("#Email").val("pavel.rujzl@fnz.co.nz").valid();
  $("#ConfirmEmail").val("pavel.rujzl@fnz.co.nz").valid();
  $("#Submit")[0].click();
})
onboardingScripts.set("Company", async function() {
  $(".entity-wizard-type-company").click();
  $("#stage1continue")[0].click();
  $(".entity-wizard-type-applicants1").click();
  $("#stage2continue")[0].click();
  $(".entity-wizard-type-Cash").click();
  $("#stage2continue")[0].click();
  $(".entity-wizard-type-noaccount").click();
  $("#GivenName").val("Pavel").valid();
  $("#FamilyName").val("Rujzl").valid();
  $("#Mobile").val("0439295670").valid();
  $("#ConfirmMobile").val("0439295670").valid();
  $("#Email").val("pavel.rujzl@fnz.co.nz").valid();
  $("#ConfirmEmail").val("pavel.rujzl@fnz.co.nz").valid();
  $("#Submit")[0].click();
})
onboardingScripts.set("SMSF, Trust, or Minor", async function() {
  $(".entity-wizard-type-trust").click();
  $("#stage1continue")[0].click();
  $(".entity-wizard-type-individual-trust").click();
  $(".entity-wizard-type-applicants1").click();
  $("#stage2continue")[0].click();
  $(".entity-wizard-type-Cash").click();
  $("#stage2continue")[0].click();
  $(".entity-wizard-type-noaccount").click();
  $("#GivenName").val("Pavel").valid();
  $("#FamilyName").val("Rujzl").valid();
  $("#Mobile").val("0439295670").valid();
  $("#ConfirmMobile").val("0439295670").valid();
  $("#Email").val("pavel.rujzl@fnz.co.nz").valid();
  $("#ConfirmEmail").val("pavel.rujzl@fnz.co.nz").valid();
  $("#Submit")[0].click();
})
onboardingScripts.set("Personal Details", async function() { 
  $("#MainTitle").val("Captain").valid();
  $("#GivenName").val("RAFLAGTEST").valid(); 
  $("#MiddleName").val("ppppppppppppppp").valid(); 
  $("#FamilyName").val("Roller").valid(); 
  $("#DateOfBirthDay").val("26").valid(); 
  $("#DateOfBirthMonth").val("9").valid(); 
  $("#DateOfBirthYear").val("1985").valid(); 
  $("#DateOfBirthEditDisplay").val("26/09/1985").valid(); 
  $("#Male").focus().click().change().blur().valid();
  $("#citizenshipCountryId").val("AUS").valid();
  $("#OccupationCode").val(223115);
  $("#OtherName").val("OtherName Test");
  $("#OccupationCodeDescription").val("Software Designer").valid();
  $("#TaxResidencyJurisdictionCountry1").val("No").valid();
  $("#IsSameAs_Mailing").focus().click();
  $("#HasConsentedTermsAndConditions").focus().click();
  $("#HasUnderstoodTermsAndConditions").focus().click();
  $("#Mobile").val("0439295670").valid(); 
  $("#ConfirmMobile").val("0439295670").valid(); 
  $("#Mobile").trigger("change");  
  $("#Email").val("travis.hunting@fnz.com").valid(); 
  $("#ContactMethod").val("Email").valid(); 
  $("#ResidentialStreetNumber").val("500").valid(); 
  $("#ResidentialStreetName").val("Bourke Street").valid(); 
  $("#ResidentialSuburb").val("Melbourne").valid(); 
  $("#ResidentialState").val("VIC").valid(); 
  $("#ResidentialPostCode").val("3000").valid(); 
  $(':hidden[id$=AddressVerified]').val('True').valid(); 
  $("#MoreThan3Years").focus().click().change().blur(); 
  $("#MoreThan3Years").focus().click().change().blur().valid(); 
  $(':hidden[id$=AddressVerified]').val('True').valid(); 
  $(':hidden[id$=AddressVerified]').val('True').valid(); 
  $("#SecurityQuestionID").val("1").valid(); 
  $("#SecurityResponse").val("fluff").valid(); 
  $("#IsSameAs_Mailing").focus().click();
  $("#IsSameAs_Mailing").focus().click();
  $("#NextButton")[0].click(); 
})
onboardingScripts.set("Company Details", async function() {
  $("#CompanyOrCorporationId").click();
  $("#Name").val("Test Company").valid();
  $("#ABN").val("51824753556").valid();
  $("#ACN").val("000000019").valid();
  $("#NatureOfBusiness").val("test").valid();
  $("#RegisteredStreetName").val("Dingo Street").valid();
  $("#RegisteredSuburb").val("North Lakes").valid();
  $("#RegisteredState").val("QLD").valid();
  $("#RegisteredPostCode").val("4509").valid();
  $("#IndustryCode").val("012109").valid();
  $("#IndustryCodeDescription").val("Oat Growing").valid();
  $("#anzsicDescription").val("Oat Growing").valid();
  $("#CompanyOrCorporation").focus().click().change().blur();
  $("#CompanyOrCorporation").focus().click().change().blur().valid();
  $("#FinancialInstNo").focus().click().change().blur();
  $("#FinancialInstNo").focus().click().change().blur().valid();
  $("#PublicYes").focus().click().change().blur();
  $("#PublicYes").focus().click().change().blur().valid();
  $("#ForeignCharityYes").focus().click().change().blur();
  $("#ForeignCharityYes").focus().click().change().blur().valid();
  $("#TaxPurposeNotSupplied").focus().click().change().blur();
  $("#TaxPurposeNotSupplied").focus().click().change().blur().valid();
  $("#IsSameAs_Physical").focus().click().change().blur();
  $("#IsSameAs_CompanyMailing").focus().click().change().blur();
  $("#NextButton")[0].click();
})
onboardingScripts.set("Trust Details", async function() {
  $("#Trust_Name").val("SalmonFarmer").valid();
  $("#Superannuation").click(); $("#Superannuation").click();
  $("#FinancialInstNo").focus().click().change().blur().valid(); 
  $("#FinancialInstNo").focus().click().change().blur().valid(); 
  $("#CharityYes").focus().click().change().blur().valid(); 
  $("#CharityYes").focus().click().change().blur().valid(); 
  $("#RegisteredStreetName").val("Bourke Street").valid(); 
  $("#RegisteredSuburb").val("Melbourne").valid(); 
  $("#RegisteredState").val("VIC").valid(); 
  $("#RegisteredPostCode").val("3000").valid(); 
  $(':hidden[id$=AddressVerified]').val('True').valid();
  $("#IsSameAs_TrustMailing").focus().click(); 
  $("#NextButton")[0].click(); 
})

function runScript(fn) {
    chrome.tabs.query({ active: true }, function (tabs) {
      let tab = tabs[0];
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: fn
        }
        //optional callback
        //,(injectionResults) => myFunction(injectionResults[0].result)
      );
    });
}

function jiraFinder() {
    let id = document.getElementById("JIRA Finder").value;
    let type; let urlBase;
    if (document.getElementById("infraRadio").checked) {
      type = "INFRASTRUCTURE";
      urlBase = "https://wiki.fnz.com/jira/browse/";
      
    } else if (document.getElementById("ndcRadio").checked) {
      type = "NDC";
      urlBase = "https://portal.fnz.com/jira/browse/";
    } else { // default
      type = "NDC";
      urlBase = "https://portal.fnz.com/jira/browse/";
    }
    let url = urlBase + type + "-" + id;
    // opens in new tab
    chrome.tabs.create({ url: url });
    // opens in same tab
    // chrome.tabs.update({ url: url });
}

function ccFinder() {
  let id = document.getElementById("CC Finder").value;
  let url = "https://pecod2.fnz.com/ui#review:id=" + id;
  // opens in new tab
  chrome.tabs.create({ url: url });
  // opens in same tab
  // chrome.tabs.update({ url: url });
}

function personalDetailsFinder() {
  let id = document.getElementById("Personal Details Finder").value;
  let urlBase;
  let urlSuffix = "&tpid=WSRP_c8cac83b__f447__42cc__b449__dbc7b5cb86fb";
  if (document.getElementById("test0Radio").checked) {
    urlBase = "http://test0.nabtradedev.com.au:9080/personal-space?prm=selectedPersonalSpaceTab=PersonalDetails&cid=1_";
  } else if (document.getElementById("test1Radio").checked) {
    urlBase = "https://test1.nabtradedev.com.au/personal-space?prm=selectedPersonalSpaceTab=PersonalDetails&cid=1_";
  } else { // default test0
    urlBase = "http://test0.nabtradedev.com.au:9080/personal-space?prm=selectedPersonalSpaceTab=PersonalDetails&cid=1_";
  }
  let url = urlBase + id + urlSuffix;
  // opens in new tab
  chrome.tabs.create({ url: url });
  // opens in same tab
  // chrome.tabs.update({ url: url });
}

function buildFinders() {
  // Title
  let div = document.createElement('div');
  div.style.textAlign = "center";
  div.innerHTML = "Issue Searching";
  document.getElementById("root").append(div);

  // Grey Background
  div = document.createElement('div');
  div.style.textAlign = "center";
  div.style.padding = "5px";
  div.style.backgroundColor = "lightgrey";
  div.id = "finderDiv"
  document.getElementById("root").append(div);

  buildJiraFinder();
  buildCCFinder();
  buildPersonalDetailsFinder();
}

function buildJiraFinder() {
    let div = document.getElementById("finderDiv");

    // Jira Finder Search Button
    let button = document.createElement('button');
    button.innerHTML = "JIRA Finder";
    button.onclick = jiraFinder.bind(this);
    div.appendChild(button);

    // Jira ID input box
    let input = document.createElement('input')
    input.id = "JIRA Finder";
    input.type = "text";
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          jiraFinder();
        }
    })
    div.appendChild(input);
    
    // Jira Radio Buttons
    let radioButton; let label;

    radioButton = document.createElement("INPUT");
    radioButton.setAttribute("type", "radio");
    radioButton.id = "infraRadio";
    radioButton.name = "jiraEnv";
    div.appendChild(radioButton);
    label = document.createElement("Label");
    label.setAttribute("for","infraRadio");
    label.innerHTML = "Infra";
    div.appendChild(label);

    radioButton = document.createElement("INPUT");
    radioButton.setAttribute("type", "radio");
    radioButton.id = "ndcRadio";
    radioButton.name = "jiraEnv";
    div.appendChild(radioButton);
    label = document.createElement("Label");
    label.setAttribute("for","ndcRadio");
    label.innerHTML = "NDC (default)";
    div.appendChild(label);

    // Line breaks, annoying
    let br = document.createElement("br");
    div.appendChild(br);
    br = document.createElement("br")
    div.appendChild(br);
}

function buildCCFinder() {
  let div = document.getElementById("finderDiv");

  // CC Finder Search Button
  let button = document.createElement('button');
  button.innerHTML = "CC Finder";
  button.onclick = ccFinder.bind(this);
  div.appendChild(button);

  // CC ID input box
  let input = document.createElement('input')
  input.id = "CC Finder";
  input.type = "text";
  input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        ccFinder();
      }
  })
  div.appendChild(input);

  // Line breaks, annoying
  let br = document.createElement("br");
  div.appendChild(br);
  br = document.createElement("br")
  div.appendChild(br);
}

function buildPersonalDetailsFinder() {
  let div = document.getElementById("finderDiv");

  // Personal Details Search Button
  let button = document.createElement('button');
  button.innerHTML = "UserID -> Personal Details";
  button.onclick = personalDetailsFinder.bind(this);
  div.appendChild(button);

  // User ID input box
  let input = document.createElement('input')
  input.id = "Personal Details Finder";
  input.type = "text";
  input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        personalDetailsFinder();
      }
  })
  div.appendChild(input);
  
  // Environment Radio Buttons
  let radioButton; let label;

  radioButton = document.createElement("INPUT");
  radioButton.setAttribute("type", "radio");
  radioButton.id = "test1Radio";
  radioButton.name = "devEnv";
  div.appendChild(radioButton);
  label = document.createElement("Label");
  label.setAttribute("for","test1Radio");
  label.innerHTML = "Test1";
  div.appendChild(label);

  radioButton = document.createElement("INPUT");
  radioButton.setAttribute("type", "radio");
  radioButton.id = "test0Radio";
  radioButton.name = "devEnv";
  div.appendChild(radioButton);
  label = document.createElement("Label");
  label.setAttribute("for","test0Radio");
  label.innerHTML = "Test0 (default)";
  div.appendChild(label);

  // Line breaks, annoying
  let br = document.createElement("br");
  div.appendChild(br);
  br = document.createElement("br")
  div.appendChild(br);
}

function buildPersonalScripts() {
  init = true;
  for (const [key, value] of personalScripts) {
      let div;
      if (init) {
          div = document.createElement('div');
          div.style.textAlign = "center";
          div.innerHTML = "Personal Scripts";
          document.getElementById("root").append(div);
          init = false;
      }
  
      let button = document.createElement('button');
      button.innerHTML = key;
      button.onclick = runScript.bind(this, value);
  
      div = document.createElement('div');
      div.style.padding = "5px";
      div.style.backgroundColor = "lightgreen";
  
      div.appendChild(button);
      document.getElementById("root").append(div);
  }
}

function buildOnboardingScripts() {
  init = true;
  for (const [key, value] of onboardingScripts) {
      let div;
      if (init) {
          div = document.createElement('div');
          div.style.textAlign = "center";
          div.innerHTML = "Onboarding Scripts <br/> (must load jQuery to use)";
          document.getElementById("root").append(div);
          init = false;
      }
  
      let button = document.createElement('button');
      button.innerHTML = key;
      button.onclick = runScript.bind(this, value);
  
      div = document.createElement('div');
      div.style.padding = "5px";
      div.style.backgroundColor = "lightblue";
  
      div.appendChild(button);
      document.getElementById("root").append(div);
  }
}

// https://www.w3schools.com/colors/colors_names.asp
function buildMiscScripts() {
  let div = document.createElement('div');
  div.style.textAlign = "center";
  div.innerHTML = "Misc Scripts";
  document.getElementById("root").append(div);

  let button = document.createElement('button');
  button.innerHTML = "Load jQuery";
  button.onclick = loadJQuery.bind(this);

  div = document.createElement('div');
  div.style.padding = "5px";
  div.style.backgroundColor = "coral";

  div.appendChild(button);
  document.getElementById("root").append(div);
}

function loadJQuery() {
  chrome.tabs.query({ active: true }, function (tabs) {
    let tab = tabs[0];
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["jquery-3.6.0.min.js", "jquery.validate.min.js"]
      }
      //optional callback
      //,(injectionResults) => myFunction(injectionResults[0].result)
    );
  });
}

buildFinders();
buildPersonalScripts()
buildMiscScripts()
buildOnboardingScripts()

//loadJQuery()
