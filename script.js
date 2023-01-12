
// let bool = true;
// const colourButton = document.getElementById("colourButton");
// colourButton.addEventListener("click", textColSwap);
// function textColSwap(){
//   let textColour;
//   let bgColour;
//   if (bool){
//     textColour = "#E63946";
//     bgColour = "#F1FAEE";
//   }else{
//     textColour = "#1D3557";
//     bgColour = "#A8DADC";
//   }

//   let text = document.getElementsByClassName("textClass");
//   for (var i = 0; i < text.length; i++) {
//     text[i].style.color = textColour;
//   }

//   let bg = document.getElementById("bgClass");
 
//   bg.style.backgroundColor = bgColour;
//   bool = !bool;
// }

const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const numberPattern = /^(\(?(0|\+44)[1-9]{1}\d{1,4}?\)?\s?\d{3,4}\s?\d{3,4})$/;
function validateForm() {
  let FNfield = document.forms["24Form"]["fname"].value;
  if ( FNfield  == "") {
    alert("First Name must be filled out");
  };

  let LNfield = document.forms["24Form"]["lname"].value;
  if ( LNfield  == "") {
    alert("Last Name must be filled out");
  };

  let Mailfield = document.forms["24Form"]["email"].value;
  if (!pattern.test(Mailfield)) {
    alert('Please provide a valid email address');
   };

  let Numfield = document.forms["24Form"]["number"].value;
  if (!numberPattern.test(Numfield)) {
    alert("Please provide valid UK mobile number");
  }
}

function init(){
  document.getElementById('submitButton').onclick = validateForm;
}
window.onload = init;