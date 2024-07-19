function changeColor() {
  const colors = ["red", "blue", "green", "orange", "yellow", "aqua"];
  let randomColor = Math.floor(Math.random() * (colors.length - 0)) + 0;
  document.body.style.backgroundColor = colors[randomColor];
}
