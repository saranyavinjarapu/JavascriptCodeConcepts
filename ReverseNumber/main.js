const reverseNumber = () => {
  let inputNumber = document.getElementById("inputNumber").value;

  /* 
  we can also achieve the same result using the simple logic below
  but somehow we could do this way as well if inbuilt functions
  usage is not allowed.
  code is : Number(inputNumber.toString().split("").reverse().join(""));
  */

  let rem,
    reversedNumber = 0;

  while (inputNumber > 0) {
    rem = inputNumber % 10;
    reversedNumber = reversedNumber * 10 + rem;
    inputNumber = Math.floor(inputNumber / 10);
  }

  document.getElementById(
    "reversedNumber"
  ).innerHTML = `Reversed Number is : ${reversedNumber}`;
};
