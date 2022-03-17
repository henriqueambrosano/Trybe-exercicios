function setUserPreferences(bgColor, color, fontSize, lineHeight, fontFamily) {
  localStorage.setItem("backgroundColor", bgColor);
  localStorage.setItem("color", color);
  localStorage.setItem("fontSize", fontSize);
  localStorage.setItem("lineHeight", lineHeight);
  localStorage.setItem("fontFamily", fontFamily);
}
localStorage.clear()

setUserPreferences('gray', 'brown', '20px','2','arial')
// console.log(document.getElementsByName("main")[0])

function loadUserPreferencess() {
  let bgColor = localStorage.getItem("backgroundColor");
  let color = localStorage.getItem("color");
  let fontSize = localStorage.getItem("fontSize");
  let lineHeight = localStorage.getItem("lineHeight");
  let fontFamily = localStorage.getItem("fontFamily");

  document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
  let paragraphs = document.getElementsByTagName("p");
  for (p of paragraphs) {
    p.style.color = color;
    p.style.fontSize = fontSize;
    p.style.lineHeight = lineHeight;
    p.style.fontFamily = fontFamily;
  }
}

window.onload = loadUserPreferencess()
