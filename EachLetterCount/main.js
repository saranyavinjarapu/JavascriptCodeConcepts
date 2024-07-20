const countEachLetter = () => {
  let inputString = document.getElementById("inputString").value;

  /* 
  the below implementation is done with map but we can use obj as well
  the diff is with maps, insertion order is preserved and 
  maps are more performant if num of additions and removals are more
  obj implementation is as

   let occurences = {};

  inputString.split("").forEach((element) => {
    if (occurences.hasOwnProperty(element) === false) occurences[element] = 1;
    else occurences[element]++;
  });
  console.log(occurences);

  document.getElementById("eachLetterCount").innerHTML =
    JSON.stringify(occurences);

  */

  let countMap = new Map();

  for (let i = 0; i < inputString.length; i++) {
    if (countMap.has(inputString[i]))
      countMap.set(inputString[i], countMap.get(inputString[i]) + 1);
    else countMap.set(inputString[i], 1);
  }

  document.getElementById("eachLetterCount").innerHTML = [
    ...countMap.entries(),
  ];
};
