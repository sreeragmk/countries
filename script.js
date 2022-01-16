function fetchCntryData(){

    let countryName=cntry_name.value
    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).
    then(res=>res.json()).then(data=>populateValue(data))
}

function populateValue(country){
    //country name
    // console.log(country[0].languages[0].name);
    let cntryCapital=country[0].capital
    let cntryLanguage=country[0].languages[0].name
    let cntryCurrencies=country[0].currencies[0].name
    let cntryCurrenciesSymbol=country[0].currencies[0].symbol
    let cntryName=country[0].name
    let cntryFlag=country[0].flag
    let cntryPopulation=country[0].population



     let html_data=`<div class="card" style="width: 18rem;">
     <img src="${cntryFlag}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Coutry Name:${cntryName}</h5>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item">Language:${cntryLanguage}</li>
       <li class="list-group-item">Capital:${cntryCapital}</li>
       <li class="list-group-item">Population:${cntryPopulation}</li>
       <li class="list-group-item">Currency Name:${cntryCurrencies}</li>
       <li class="list-group-item">Currency Symbol:${cntryCurrenciesSymbol}</li>

     </ul>
   
   </div>`


    document.querySelector("#result").innerHTML=html_data

    //flag
    //population
    //currencyname
    //currency Symboll
    //language
    //capital
}