const checkIfPalindome = () => {
  let str = document.getElementById("inputString").value;
  let reversedStr = str.split("").reverse().join("");

  document.getElementById("isPalindrome").innerHTML =
    `Is Input String Palindrome :` + (reversedStr === str);
};
