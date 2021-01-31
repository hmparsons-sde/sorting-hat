// SET CONSTANTS FOR FUTURE FUNCTIONS

const sortingHouses = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];
const sortedWizards = [];
const oustedWizards = [];

// PRINT TO DOM - I am targeting HTML elements through JS. printToDom is reusable and will make the function results appear on screen.

function printToDom(divId, textToPrint) {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// MAKE FORM APPEAR UPON CLICKING SORTING BUTTON - Toggle Hide/Show

function sortFormAppear() {
  const form = document.getElementById("sortingForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

// GENERATE STUDENT CARD

const iNeedAName = () => {
  let domString = ``;
  domString += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Not So Fast!</strong> I said I need a name!!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
  printToDom("iNeedAName", domString);
};

// ASSIGN ID TO EACH STUDENT - incrementer function

let studentId = 0;

function increment() {
  studentId++;
  return studentId;
}

//GENERATE STUDENT CARD

const sortButton = document.getElementById("sortBtn");

const studentCard = (e) => { 
    e.preventDefault();
      if (studentName === '') {
        iNeedAName();
      } else {
        const name = document.getElementById("studentName").value;
        const house = sortingHouses[Math.floor(Math.random() * sortingHouses.length)];
        const studentId = increment();
        const newStudentCard = {
          name,
          house,
          studentId,
        }
      sortedWizards.push(newStudentCard);
      }
  document.querySelector("sortingForm").reset();
};

sortButton.addEventListener("click", studentCard);

// LOOP THROUGH SORTED WIZARDS



// DELETE FUNCTIONALITY

// INITIALIZE + CALL FUNCTION
