const reverseNumber = () => {
  let inputNumber = document.getElementById("inputNumber").value;

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
