
// document.getElementById("fauxSite").innerHTML = `
// <h2> EYYYY </h2>`

let bool = true;
const colourButton = document.getElementById("colourButton");
colourButton.addEventListener("click", textColSwap);
function textColSwap(){
  let textColour;
  let bgColour;
  if (bool){
    textColour = "#E63946";
    bgColour = "#F1FAEE";
  }else{
    textColour = "#1D3557";
    bgColour = "#A8DADC";
  }

  let text = document.getElementsByClassName("textClass");
  for (var i = 0; i < text.length; i++) {
    text[i].style.color = textColour;
  }

  let bg = document.getElementById("bgClass");
 
  bg.style.backgroundColor = bgColour;
  bool = !bool;
}
