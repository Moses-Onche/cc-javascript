(async () => {
  let url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  let response = await fetch(url);
  let populationData = await response.json();

  // console.log(populationData.source[0].measures[0]);
  let popArray = populationData.data;
  for (let count = 0; count <= popArray.length - 1; count++){
    console.log(popArray[count]['ID Year']);
  }
})();