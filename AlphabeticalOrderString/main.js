const setAlphabeticalOrder = () => {
  let inputString = document.getElementById("inputString").value;
  let alphabeticalOrderString = inputString.split("").sort().join("");

  document.getElementById(
    "alphabeticalOrderString"
  ).innerHTML = `Reversed String is : ${alphabeticalOrderString}`;
};
