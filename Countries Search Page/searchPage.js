let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

let searchInputValue = "";
let countriesList = [];

function createAndAppendContriesList(country) {
    
    //creating countryEl container
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card","col-12", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountriesEl.appendChild(countryEl);
    
    //country flag image Element
    let countryFlagEl = document.createElement("img");
    countryFlagEl.src = country.flag;
    countryFlagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild(countryFlagEl);
    
    //creating country Info Container Element
    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild(countryInfoEl);
    
    //creating country Name Element
    let countryNameEl = document.createElement("p");
    countryNameEl.textContent = country.name;
    countryNameEl.classList.add("country-name");
    countryInfoEl.appendChild(countryNameEl);
    
    //creating Country Population Element
    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = country.population;
    countryPopulationEl.classList.add("country-population");
    countryInfoEl.appendChild(countryPopulationEl);
}

function displayCountriesList(){
    resultCountriesEl.textContent = "";
    for(let country of countriesList){
        let countryName = country.name;
        
        if(countryName.includes(searchInputValue)){
            createAndAppendContriesList(country);
        }
    }
}

function getCountriesName() {
    
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method : "GET"
    };
    spinnerEl.classList.remove("d-none");
    fetch(url, options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinnerEl.classList.add("d-none");
        countriesList = jsonData;
        displayCountriesList(countriesList);
    });
}

function onChangeSearchInput(event) {
    searchInputValue = event.target.value;
    displayCountriesList();
}

getCountriesName();
searchInputEl.addEventListener("keydown", onChangeSearchInput);