const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));

//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude, spaceXResults[0].location.longitude));

d3.json(url).then(spaceXResults => Object.keys(spaceXResults).map(key => console.log(spaceXResults[key].location.latitude, spaceXResults[key].location.longitude)));

 







