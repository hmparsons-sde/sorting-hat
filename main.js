// SET CONSTANTS FOR FUTURE FUNCTIONS

const sortingHouses = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];
const sortedWizards = [];
const oustedWizards = [];

const startSorting = document.getElementById("startBtn");
const sortButton = document.getElementById("sortBtn");
const name = document.getElementById("name");

// PRINT TO DOM - I am targeting HTML elements through JS. printToDom is reusable and will make the function results appear on screen.

function printToDom(divId, textToPrint) {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// MAKE FORM APPEAR UPON CLICKING SORTING BUTTON - target the visibility of the entire form element.

const hiddenSortingForm = (array) => {
  document.getElementById("name-form").style.visibility = "hidden";
};

// In this project, I'm using visibility, rather than display, so that the layout is affected. I want each div to appear in cascading order.

const sortFormAppear = (array) => {
  document.getElementById("name-form").style.visibility = "visible"; 
};

// SORT BUTTON CLICK RESULTS IN:
// 1. CLEARED FORM

// 2. CARD APPEARS

// 3. GENERATE CARD WITH STUDENT NAME + RANDOMLY ASSIGNED HOUSE

// 4. DELETE FUNCTIONALITY

// INITIALIZE + CALL FUNCTION
