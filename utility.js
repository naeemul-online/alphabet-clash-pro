
/* Hide the element by there ID */
function hideElementById(element) {
  const elementId = document.getElementById(element);
  elementId.classList.add("hidden");
}

/* Get the shown element by there id */
function showElementById(element) {
  const elementId = document.getElementById(element);
  elementId.classList.remove("hidden");
}

/* Set Value by id */
function setValueById (elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
 }
 


/* Set keyboard background color by ID */
function setBackgroundColorById(element){
    const elements = document.getElementById(element)
    elements.classList.add("bg-orange-400")
}

/* remove keyboard background color by ID */
function removeBackgroundColorById(element){
    const elements = document.getElementById(element)
    elements.classList.remove("bg-orange-400")
}

/* Text value in intiger get by id function */

function getTextElementById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function getTextValueById(elementId){
  const element = document.getElementById(elementId)
    const value = element.innerText;
    return value;
  
}



/* Get random alphabet  */
function getRandomAlphabetById() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabetArray[index];
  return alphabet;
  // console.log(alphabet)
}

