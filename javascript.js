const button = document.getElementById("wButton");
const changer = document.getElementById("changer");
const input1 = document.getElementById("text1");
const cityName = document.getElementById("cityname-div");
const tempDiv = document.getElementById("temp-div");
const descriptionDiv = document.getElementById("description-div");

let input2 = "&units=metric";
let input3 = "℃";

button.addEventListener("click", function weather() {
  fetcher()
});

function fetcher () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input1.value}${input2}&appid=1588545a45f827f77aacdd0e93293a48`)
    .then((response) => response.json())
    .then((data) => {
      temp1 = Math.floor(data.main.temp);
      let description = data.weather[0].description;
      console.log(description);
      cityName.innerText = input1.value;
      tempDiv.innerText = temp1 + input3;
      descriptionDiv.innerText = description;
      if (description == "overcast clouds") {
        document.body.style.backgroundImage =
          "url('weather-img/overcastclouds.jpg')";
      }
      if (description == "clear sky") {
        document.body.style.backgroundImage = "url('weather-img/clearsky.jpg')";
      }
      if (description == "broken clouds") {
        document.body.style.backgroundImage =
          "url('weather-img/brokenclouds.jpg')";
      }
    });
}
changer.addEventListener("click", function () {
  console.log(`change`);
  if (input2 === "&units=metric") {
    input2 = "&units=imperial";
    input3 = " ℉";
  } else {
    input2 = "&units=metric";
    input3 = " ℃";
  }
  fetcher()
});

