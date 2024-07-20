const capitalizeFirstLetter = () => {
  let inputSentence = document.getElementById("inputSentence").value;

  let capitalizedSentence = inputSentence
    .split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.substr(1);
    })
    .join(" ");

  document.getElementById("capitalizedString").innerHTML =
    "Captilazed Sentence is : " + capitalizedSentence;
};
