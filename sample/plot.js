// // To check all the data in the sample json
// d3.json("samples.json").then(function(data){
//   console.log(data);
// });

// // To check the wfreq data in the sample json
// d3.json("samples.json").then(data => {
//   wfreq = data.metadata.map(person => person.wfreq);
//   console.log(wfreq);
// });

// // Extract wfreq data from sample json and sort it descending
// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//   console.log(wfreq);
// });

// // Extract wfreq data from sample json and sort it descending and delete null
// d3.json("samples.json").then(function(data){
//   wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//   filteredWfreq = wfreq.filter(element => element !=
// null);
//   console.log(filteredWfreq);
// });

// Print all the metadata for each person
d3.json("samples.json").then(data => {
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});