import "./styles.css";


export const weatherData = async function(location) {

  console.log("script starting...");
  
  let apiKey = "FSYHZHDSHT5LBZJSVXHAK9GNR";
  //https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=

  let searchQuery = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`

  let me =  await retrieveData(searchQuery);

  return me

};



async function retrieveData(searchQuery) {
  try {
    let response = await fetch(searchQuery,{
      mode: 'cors'
    });
    if (response.status == 200){
      const data  = await response.json();
      console.log(data)
      return formatData(data)
      
    }
    else{
      throw new Error("response couldn't be found")
    }
  } catch(error) {
    console.log("error occurred");
  }
  
}

async function formatData(data) {
  const formattedData = data.days
  console.log(formattedData);
  return data.days;
 
}