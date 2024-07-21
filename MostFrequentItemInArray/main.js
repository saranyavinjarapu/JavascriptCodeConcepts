const mostFrequentItemInArray = () => {
  let inputArray = document.getElementById("inputArray").value;
  let strToArray = inputArray.split(",");
  let freqArray = {};

  strToArray.forEach((element) => {
    if (freqArray.hasOwnProperty(element)) freqArray[element]++;
    else freqArray[element] = 1;
  });

  let freqElem = Object.keys(freqArray).reduce((acc, num) =>
    freqArray[acc] > freqArray[num] ? acc : num
  );

  document.getElementById("mostFrequentItemInArray").innerHTML =
    "Most Frequent Item is : " + freqElem;
};
