let searchInputEl = document.getElementById("searchInput");
let searchResultEl = document.getElementById("searchResults");

function createAndAppendSearchResult(result) {
    //creating result-item Container
    
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultEl.appendChild(resultItemEl);
    
    //creating HTMLTitleElement
    
    let {title, link, description} = result;
    let titleEl = document.createElement("a");
    titleEl.textContent = title;
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);
    
    //creating break Element
    
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);
    
    //creating url
    
    let linkEl = document.createElement("a");
    linkEl.textContent = link;
    linkEl.href = link;
    linkEl.target = "-blank";
    linkEl.classList.add("result-url");
    resultItemEl.appendChild(linkEl);
    
    //creating breakElement
    
    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);
    
    //creating description Element
    
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("link-description");
    resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResult) {
    for(let result of searchResult) {
        createAndAppendSearchResult(result);
    }
    
}

function searchWikipedia(event) {
    if(event.key === "Enter"){
        searchResultEl.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        
        fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function (jsonData){
            let {search_results} = jsonData;
            displayResults(search_results);
        });
    }
}

searchInputEl.addEventListener("keydown", searchWikipedia);