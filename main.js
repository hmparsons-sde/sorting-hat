// SET CONSTANTS FOR FUTURE FUNCTIONS

const sortingHouses = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];
const sortedWizards = [];
const oustedWizards = [];

// const sortButton = document.getElementById("sortBtn"); -saving for future use
// const name = document.getElementById("name");

// PRINT TO DOM - I am targeting HTML elements through JS. printToDom is reusable and will make the function results appear on screen.

function printToDom(divId, textToPrint) {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// MAKE FORM APPEAR UPON CLICKING SORTING BUTTON - Toggle Hide/Show

function sortFormAppear() {
  const form = document.getElementById("name-form");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

// SORT BUTTON CLICK RESULTS IN:
// 1. CLEARED FORM

// 2. CARD APPEARS

// 3. GENERATE CARD WITH STUDENT NAME + RANDOMLY ASSIGNED HOUSE

// 4. DELETE FUNCTIONALITY

// INITIALIZE + CALL FUNCTION
