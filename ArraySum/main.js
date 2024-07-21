const arraySum = () => {
  let inputArray = document.getElementById("inputArray").value;
  let strToArray = inputArray.split(",");

  /*received input as comma separated text and then did .split 
    to convert it to an array of values*/

  /*passing initial value of 0 is important here to make sure the final values
   does not come off as a string and rather as a sum*/

  let finalSum = strToArray.reduce((total, num) => total + Number(num), 0);

  document.getElementById("arraySum").innerHTML = "Array Sum is : " + finalSum;
};
