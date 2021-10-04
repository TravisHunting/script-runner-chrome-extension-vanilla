/*global chrome*/

let inputScripts = new Map();
//inputScripts.set("JIRA Finder", jiraFinder)
//inputScripts.set("CC Finder", codeCollabFinder)
inputScripts.set("JIRA Finder", {func: finder, url: "https://portal.fnz.com/jira/browse/NDC-"})
inputScripts.set("CC Finder", {func: finder, url: "https://portal.fnz.com/jira/browse/NDC-"})

let scriptMap = new Map();
scriptMap.set("test", function(){console.log("firing") })
scriptMap.set("mana", function(){document.getElementById("input_1").value = "travis.hunting";document.getElementById("input_2").value = "Sivart97"; let input3 = document.getElementById("input_3"); input3.value = "7233"; input3.focus().val(input3.val()); })
scriptMap.set("enable-scroll", function() { document.body.style.overflow = 'auto'; })

//let scriptMap2 = new Map();
//scriptMap.set("JIRA Finder2", function() {var id = window.prompt("JIRA ID?"); window.location.href='https://portal.fnz.com/jira/browse/NDC-' + id; })
//scriptMap2.set("JIRA Finder4", "data:text/html,<script>var id = window.prompt('Review ID?')%0D%0Awindow.location.href=%27https%3A%2F%2Fpecod2.fnz.com%2Fui%23review%3Aid%3D%27+id;</script>")


function runBookmarkletMap(arg) {
    chrome.tabs.query({ active: true }, function (tabs) {
      let tab = tabs[0];
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: scriptMap.get(arg)
        }
        //optional callback
        //,(injectionResults) => myFunction(injectionResults[0].result)
      );
    });
  }

// function jiraFinder(inputId) {
//     let id = document.getElementById(inputId).value;
//     let url = "https://portal.fnz.com/jira/browse/NDC-" + id;
//     chrome.tabs.create({ url: url });
// }

// function codeCollabFinder(inputId) {
//     let id = document.getElementById(inputId).value;
//     let url = "https://pecod2.fnz.com/ui#review:id=" + id;
//     chrome.tabs.create({ url: url });
// }

function finder(inputId, baseURL) {
    let id = document.getElementById(inputId).value;
    let url = baseURL + id;
    chrome.tabs.create({ url: url });
}

for (const [key, value] of inputScripts) {

    let div = document.createElement('div');
    div.style.textAlign = "center";
    div.style.padding = "5px";

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

// for (const [key, value] of inputScripts) {

//     let div = document.createElement('div');
//     div.style.textAlign = "center";
//     div.style.padding = "5px";

//     let button = document.createElement('button');
//     button.innerHTML = key;
//     button.onclick = value.bind(this, key);

//     let input = document.createElement('input')
//     input.id = key;
//     input.type = "text";
//     input.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             value(key)
//         }
//     })

//     div.appendChild(button);
//     div.appendChild(input);
//     document.getElementById("root").append(div);
// }

for (const [key, value] of scriptMap) {

    let button = document.createElement('button');
    button.innerHTML = key;
    button.onclick = runBookmarkletMap.bind(this, key);

    let div = document.createElement('div');
    div.style.textAlign = "center";
    div.style.padding = "5px";

    div.appendChild(button);
    document.getElementById("root").append(div);
}

// for (const [key, value] of scriptMap2) {

//     let button = document.createElement('button');
//     button.innerHTML = key;
//     button.onclick = eval(scriptMap2.get(key)).bind(this, key);
//     //button.onclick = eval(scriptMap2.get(key));

//     let div = document.createElement('div');
//     div.style.textAlign = "center";
//     div.style.padding = "5px";

//     div.appendChild(button);
//     document.getElementById("root").append(div);
// }

// function jiraFinder2() {
//     let id = document.getElementById("jiraFinder").value;
//     let url = "https://portal.fnz.com/jira/browse/NDC-" + id;
//     chrome.tabs.create({ url: url });
// }




// let button = document.createElement('button');
// button.innerHTML = "Jira Finder";
// // opens in same tab
// // button.onclick = chrome.tabs.update.bind(this, {
// //     url: "http://www.example.com/"
// // });

// // opens in new tab
// //button.onclick = chrome.tabs.create.bind(this, { url: "http://www.example.com/" });


// button.onclick = jiraFinder.bind(this);


// let div = document.createElement('div');
// div.style.textAlign = "center";
// div.style.padding = "5px";

// div.appendChild(button);
// document.getElementById("root").append(div);

// let input = document.createElement('input')
// input.id = "jiraFinder";
// input.type = "text";

// div = document.createElement('div');
// div.style.textAlign = "center";
// div.style.padding = "5px";

// div.appendChild(input);

// document.getElementById("root").append(div)

