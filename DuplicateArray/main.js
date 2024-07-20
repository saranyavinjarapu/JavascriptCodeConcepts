const duplicateArray = () => {
  let inputArray = document.getElementById("inputArray").value;
  let strToArray = inputArray.split(",");

  /*received input as comma separated text and then did .split 
  to convert it to an array of values*/

  /*we could also do strToArray.concat(strToArray) as well to achieve
  the same results as we did below with spread operator*/

  let finalArray = [...strToArray, ...strToArray];
  document.getElementById("duplicateArrayOutput").innerHTML =
    "Final Array is : " + finalArray;
};
