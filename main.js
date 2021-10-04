/*global chrome*/

let inputScripts = new Map();
inputScripts.set("JIRA Finder", {func: finder, url: "https://portal.fnz.com/jira/browse/NDC-"})
inputScripts.set("CC Finder", {func: finder, url: "https://pecod2.fnz.com/ui#review:id="})

let personalScripts = new Map();
// enable-scroll use case:
// When you load a website that locks you out with a massive ad / paywall and disables scrolling
// I use an adblocker or devtools to hide the ads/paywall and then re-enable scrolling
personalScripts.set("enable-scroll", function() { document.body.style.overflow = 'auto'; })

let miscScripts = new Map();
miscScripts.set("Load jQuery", loadJQuery)

let onboardingScripts = new Map()
onboardingScripts.set("Individual", async function() {
  $(".entity-wizard-type-individual").click();
  $("#stage1continue")[0].click();
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
  $("#GivenName").val("Pavel").valid(); 
  $("#MiddleName").val("qqqqqqqqqqqqqqq").valid(); 
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
  $("#Email").val("pavel.rujzl@fnz.co.nz").valid(); 
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

function finder(inputId, baseURL) {
    let id = document.getElementById(inputId).value;
    let url = baseURL + id;
    chrome.tabs.create({ url: url });
}

function buildInputScripts() {
  let init = true;
  for (const [key, value] of inputScripts) {
    let div;
    if (init) {
        div = document.createElement('div');
        div.style.textAlign = "center";
        div.innerHTML = "Issue Searching";
        document.getElementById("root").append(div);
        init = false;
    }

    div = document.createElement('div');
    div.style.textAlign = "center";
    div.style.padding = "5px";
    div.style.backgroundColor = "lightgrey";

    let button = document.createElement('button');
    button.innerHTML = key;
    button.onclick = value.func.bind(this, key, value.url);

    let input = document.createElement('input')
    input.id = key;
    input.type = "text";
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            value.func(key, value.url)
        }
    })

    div.appendChild(button);
    div.appendChild(input);
    document.getElementById("root").append(div);
  }
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
          div.innerHTML = "Onboarding Scripts";
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

buildInputScripts()
buildPersonalScripts()
buildMiscScripts()
buildOnboardingScripts()

//loadJQuery()
