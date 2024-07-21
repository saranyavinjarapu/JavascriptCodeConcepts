const removeObjectsFromArray = () => {
  let arr = [
    { name: "harsh", gender: "male" },
    { name: "saranya", gender: "female" },
    { name: "pravin", gender: "male" },
    { name: "mounika", gender: "female" },
    { name: "raj", gender: "male" },
  ];

  //remove objects that are not male

  let newArr = arr.filter((element) => {
    return element.gender === "male";
  });

  console.log(newArr);

  document.getElementById("finalArrayOfObjects").innerHTML =
    JSON.stringify(newArr);
};
