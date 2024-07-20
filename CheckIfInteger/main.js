const checkIfInteger = () => {
  let inputNumber = document.getElementById("inputNumber").value;
  let output = "";

  /* any number when divided by 1 will give a remainder of zero is it is an integer
  for example, 12/1 will give a quotient of 12 of remainder of zero, hence integer
  but if we divide 12.5/1 then remainder would be 0.5, hence not an integer*/

  if (inputNumber % 1 == 0) output = "Yes, the input is an integer";
  else output = "No, the input is not an integer";

  document.getElementById("isInteger").innerHTML = output;
};
