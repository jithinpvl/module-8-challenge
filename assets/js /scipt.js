
const weatehrAPIURL ="https://api.openweathermap.org";
let weatherAPIKey = "d4b2a5bbe53401796d8f7d9b1f6d6115"
let searchHistory =[]


let searchInput = $("#search-input")
let searchForm = $("#search-form");
let searchHistorycontainer = $("#history")

function fetchCoord (search){
    let queryURL = `${weatehrAPIURL}city/2643743 ${search} &limit=5appid=${weatherAPIKey}`
    console.log(queryURL);
    
    fetch(queryURL, { method: "GET"}).then(function(data) {
        return data .json()
    })
 .then (function(response) {
    console.log(response);

    if(!response[0]) {
        alert("Location not found")
    } else {

        if(searchHistory.indexof(search)!== -1) {return
        }
searchHistory.push(search);
localStorage.setItem("search-history",JSON.stringify(search));


searchHistorycontainer.html("")

for(let i =0; i< searchHistory.length; i++){
    let btn = $("<button>");
    btn.attr("type", "button")

    btn.addClass("history-btn btn-history")



    btn.attr ("data-search", searchHistory[i])
    btn.TEXT(searchHistory[i])
    searchHistorycontainer.append (btn)
} 
    }
       
    
 })
    

}
function  submitSearchForm(event) {

    event.preventDefault ();

let search = searchInput.val().trim()

    fetchCoord(search);
}

searchForm.on("submit",submitSearchForm);










