import { weatherData } from "./dataRetrival";
import { createAndAppend } from "./DOMmanipulation";

const onLoad = (function() {
  const mainDiv = document.querySelector("div")
  const userInput = createAndAppend("input", "", mainDiv)
  userInput.placeholder = "Your City"
  const submitButton = createAndAppend("button", "Submit", mainDiv)

  const weatherIn = createAndAppend("div", "Weather in: ", mainDiv)
  const daysDiv = createAndAppend("div", "", mainDiv)
  daysDiv.className = "days";

  const todayDiv = createAndAppend("div", "Today", daysDiv)
  const todayDivData = createAndAppend("div", "", todayDiv)
  
  const tomorrowDiv = createAndAppend("div", "Tomorrow", daysDiv)
  const tomorrowDivData = createAndAppend("div", "", tomorrowDiv)

  const dayAfterDiv = createAndAppend("div", "", daysDiv)
  const dayAfterDivData = createAndAppend("div", "The day after Tomorrow", dayAfterDiv)



  submitButton.addEventListener("click", async () => {
    weatherIn.textContent = `Weather in: ${userInput.value}`
    const localData = await weatherData(userInput.value)
    
    todayDiv.textContent = `Today: Max: ${localData[0].tempmax} Min: ${localData[0].tempmin}`

    tomorrowDiv.textContent = `Tomorrow: Max: ${localData[1].tempmax} Min: ${localData[1].tempmin}`

    dayAfterDiv.textContent = `The Day After Tomorrow: Max: ${localData[2].tempmax} Min: ${localData[2].tempmin}`
    

  })



})()
