import "./styles.css";

const weatherData = (function() {

  console.log("scripting starting...");
  let location = "london";
  let apiKey = "FSYHZHDSHT5LBZJSVXHAK9GNR";
  //https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=

  let searchQuery = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
  retrieveData(searchQuery);

})();



async function retrieveData(searchQuery) {
  try {
    let response = await fetch(searchQuery,{
      mode: 'cors'
    });
    if (response.status == 200){
      const data  = await response.json();
      console.log(data);
      console.log("THis is my data");
    }
    else{
      throw new Error("response couldn't be found")
    }
  } catch(error) {
    console.log("error occurred");
  }
  
}