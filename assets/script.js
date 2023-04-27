var APIkey = "53e62630fb2553bb7d6f2aaa5fd5272a";

var city;

var cityFormEl = document.querySelector("#city-form");//search bar
var cityInputEl = document.querySelector("#city");

var formSubmitHandler = function (event) {
    //connects to the search bar
    event.preventDefault();

    city = cityInputEl.value.trim();
    

    if (city) {
        getCityForecast(city);
    }
}


var segmentsBody = document.getElementById("segmentBody");
var fetchBtn = document.getElementById("city");
var segmentCell = document.getElementsByClassName("ui segment");
//var tempDataEl = document.querySelector("p");//change this to temp

console.log(segmentCell);//cool
//console.log(tempDataEl);//cool

//todays weather
var dayZero = document.getElementById("dayZero")
var dayOne = document.getElementById("dayOne");
var dayTwo = document.getElementById("dayTwo");
var dayThree = document.getElementById("dayThree");
var dayFour = document.getElementById("dayFour");

var getCityForecast = function (city) {
    console.log(city);
    var queryURLForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial";
    var queryURLCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial";
    
    fetchBtn.addEventListener('submit', getAPI());
    
    function getAPI(){
        fetch(queryURLCurrent)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                console.log(data);

                var iconEL = document.createElement('img');
                var iconCode = data.weather[0].icon;
                var iconSrc = "http://openweathermap.org/img/w/" + iconCode + ".png";
                iconEL.src = iconSrc;
                dayZero.appendChild(iconEL);
                //temp data
                var tempDataEl = document.createElement('p');
                tempDataEl.textContent = "Temp: " + data.main.temp + " F";
                console.log(tempDataEl);//cool
                //appending temp data to html el for todays weather
                dayZero.appendChild(tempDataEl);

                //wind data
                var windDataEl = document.createElement('p');
                windDataEl.textContent = "Wind: " + data.wind.speed + " MPH";
                //appending wind data to html el for todays weather
                dayZero.appendChild(windDataEl);

                //humidity data
                var humidityDataEl = document.createElement('p');
                humidityDataEl.textContent = "Humidity: " + data.main.humidity + "%";
                //appending humidity data to html el for todays weather
                dayZero.appendChild(humidityDataEl);
            })
        fetch(queryURLForecast)
            .then(function (response){
                return response.json();
            })
            .then(function (data){
                console.log(data)

                // DAY ONE
                iconEL = document.createElement('img');
                iconCode = data.list[1].weather[0].icon;
                iconSrc = "http://openweathermap.org/img/w/" + iconCode + ".png";
                iconEL.src = iconSrc;
                dayOne.appendChild(iconEL);
                //temp data
                tempDataEl = document.createElement('p');
                tempDataEl.textContent = "Temp: " + data.list[1].main.temp + " F";
                console.log(tempDataEl);//cool
                dayOne.appendChild(tempDataEl);
                //wind data
                windDataEl = document.createElement('p');
                windDataEl.textContent = "Wind: " + data.list[1].wind.speed + " MPH";
                dayOne.appendChild(windDataEl);
                //humidity data
                humidityDataEl = document.createElement('p');
                humidityDataEl.textContent = "Humidity: " + data.list[1].main.humidity + "%";
                dayOne.appendChild(humidityDataEl);

                //DAY TWO
                iconEL = document.createElement('img');
                iconCode = data.list[2].weather[0].icon;
                iconSrc = "http://openweathermap.org/img/w/" + iconCode + ".png";
                iconEL.src = iconSrc;
                dayTwo.appendChild(iconEL);
                //temp
                tempDataEl = document.createElement('p');
                tempDataEl.textContent = "Temp: " + data.list[2].main.temp + " F";
                console.log(tempDataEl);//cool
                dayTwo.appendChild(tempDataEl);
                //wind data
                windDataEl = document.createElement('p');
                windDataEl.textContent = "Wind: " + data.list[2].wind.speed + " MPH";
                dayTwo.appendChild(windDataEl);
                //humidity data
                humidityDataEl = document.createElement('p');
                humidityDataEl.textContent = "Humidity: " + data.list[2].main.humidity + "%";
                dayTwo.appendChild(humidityDataEl);

                //DAY THREE
                iconEL = document.createElement('img');
                iconCode = data.list[3].weather[0].icon;
                iconSrc = "http://openweathermap.org/img/w/" + iconCode + ".png";
                iconEL.src = iconSrc;
                dayThree.appendChild(iconEL);
                //temp
                tempDataEl = document.createElement('p');
                tempDataEl.textContent = "Temp: " + data.list[3].main.temp + " F";
                console.log(tempDataEl);//cool
                dayThree.appendChild(tempDataEl);
                //wind data
                windDataEl = document.createElement('p');
                windDataEl.textContent = "Wind: " + data.list[3].wind.speed + " MPH";
                dayThree.appendChild(windDataEl);
                //humidity data
                humidityDataEl = document.createElement('p');
                humidityDataEl.textContent = "Humidity: " + data.list[3].main.humidity + "%";
                dayThree.appendChild(humidityDataEl);

                //DAY FOUR
                iconEL = document.createElement('img');
                iconCode = data.list[4].weather[0].icon;
                iconSrc = "http://openweathermap.org/img/w/" + iconCode + ".png";
                iconEL.src = iconSrc;
                dayFour.appendChild(iconEL);
                //temp
                tempDataEl = document.createElement('p');
                tempDataEl.textContent = "Temp: " + data.list[4].main.temp + " F";
                console.log(tempDataEl);//cool
                dayFour.appendChild(tempDataEl);
                //wind data
                windDataEl = document.createElement('p');
                windDataEl.textContent = "Wind: " + data.list[4].wind.speed + " MPH";
                dayFour.appendChild(windDataEl);
                //humidity data
                humidityDataEl = document.createElement('p');
                humidityDataEl.textContent = "Humidity: " + data.list[4].main.humidity + "%";
                dayFour.appendChild(humidityDataEl);

                //look at "for each"//
                //const fruits = ["apple", "orange", "cherry"];
                //fruits.forEach(myFunction);

            })
        }
}

cityFormEl.addEventListener ("submit", formSubmitHandler);