function reverseString() {
  let inputSentence = document.getElementById("sentence").value;

  /* inputSentence.split(" ") splits the words in the sentence using space as breaker
  and each word should in turn be reversed
  used map to map each word by accessing the word 
  and splitting the word, which will give array of letters, then reverse the array
  and then join it to make a string again
  return the whole thing as a result for map 
  and then join all the words using space again so we final the final sentence as string */

  let reversedSentence = inputSentence
    .split(" ")
    .map((element) => {
      return element.split("").reverse().join("");
    })
    .join(" ");

  document.getElementById(
    "reversedString"
  ).innerHTML = `Reversed String is : ${reversedSentence}`;
}
