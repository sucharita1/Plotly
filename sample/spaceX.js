const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// to find the latiude and longitude of launch pad
d3.json(url).then(spaceXResults => 
    Object.keys(spaceXResults).map(key => 
        console.log(spaceXResults[key].location.latitude, spaceXResults[key].location.longitude)));

        







