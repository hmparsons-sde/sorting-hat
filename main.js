// SET CONSTANTS FOR FUTURE FUNCTIONS

const sortingHouses = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];
const sortedWizards = [];
const oustedWizards = [];
const sortButton = document.getElementById("sortBtn");

// PRINT TO DOM - I am targeting HTML elements through JS. printToDom is reusable and will make the function results appear on screen.

const printToDom = (divId, textToPrint) => {
  console.log(divId)
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

// MAKE FORM APPEAR UPON CLICKING SORTING BUTTON - Toggle Hide/Show

const sortFormAppear = () => {
  const form = document.getElementById("sortingForm");
  if (form.style.display === "block") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

// ERROR FOR BLANK FORM 

const iNeedAName = () => {
  let domString = ``;
  domString += `<div class="alert alert-danger alert-dismissible fade show" role="alert" id="alert">
        <strong>Not So Fast!</strong> I said I need a name!!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
  console.log(domString)
  printToDom("#alert", domString);
};

//GENERATE STUDENT CARD

const generateNewStudentCard = (studentObj) => {
  let domString = " ";
    studentObj.forEach((item, i) => {
      domString += `<div class="card" style="width: 18rem;">
        <div class="card-image my-2><img src=${studentObj[i].imageUrl} class="card-img-top" alt="Hogwarts House Crest"></div>
        <div class="card-body">
          <h5 class="card-title">${studentObj[i].house}</h5>
          <p class="card-text">${studentObj[i].name}</p>
          <button type="button" class="btn btn-outline-danger" id="${studentObj[i].studentId}" id="expelBtn">EXPEL</button>
        </div>
      </div>`;
    })
  printToDom("#sortedWizards", domString);
};

const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  if (buttonId === "sortBtn") {
    document.querySelector("#form").innerHTML = 
      `<div class="form-group">
        <form id="sortingForm" class="needs-validation" novalidate>
            <input type="text" class="form-control" id="studentName" placeholder="I demand a name." required />
            <button id="sortBtn" type="button" class="btn btn-outline-info btn-lg d-grid gap-2 col-6 mx-auto mt-4 mb-4">Give Me A House</button>
        </form>
      </div>`

  document.querySelector("#sortBtn").addEventListener("click", generateNewStudentCard);
  }
};

const getFormInfo = (e) => {
  if (studentName === "") {
    iNeedAName();
  } else {
    const name = document.getElementById("studentName").value;
    const house =
      sortingHouses[Math.floor(Math.random() * sortingHouses.length)];
      const studentId = students
        .map((student) => student.id)
        .sort((a, b) => a - b);
      const id = studentId.length ? studentIds[studentId.length - 1] + 1 : 1;
      const newStudentCard = {
        name,
        house,
        id,
    };
    if (newStudentCard.house === "HufflePuff") {
      newStudentCard.imageUrl = "https://user-images.githubusercontent.com/67122062/106535473-e9da6c80-64bb-11eb-80f4-c73dfdf8af9c.png"
      document.getElementById("sorted-student-card-container").style.backgroundColor = "yellow";
    } else if (newStudentCard.house === "Ravenclaw") {
      newStudentCard.imageUrl = "https://user-images.githubusercontent.com/67122062/106535483-ef37b700-64bb-11eb-82ee-08823f3db550.jpg"
      document.getElementById("sorted-student-card-container").style.backgroundColor = "royalblue";
    } else if (newStudentCard.house === "Gryffindor") {
      newStudentCard.imageUrl = "https://user-images.githubusercontent.com/67122062/106535478-ec3cc680-64bb-11eb-95c3-72476a86e647.png"
      document.getElementById("sorted-student-card-container").style.backgroundColor = "crimson";
    } else if (newStudentCard.house === "Slytherin") {
      newStudentCard.imageUrl = "https://user-images.githubusercontent.com/67122062/106535527-0676a480-64bc-11eb-9bc4-0c55da1bc506.jpg"
      document.getElementById("sorted-student-card-container").style.backgroundColor = "green";
    }
    sortedWizards.push(newStudentCard);
  }
  document.querySelector("#sortingForm").reset();
};

// DELETE FUNCTIONALITY

const expelNaughtyWizard = (e) => {
  const targetId = e.target.id;

  if (targetType === "expelBtn") {
    sortedWizards.splice(targetId, 1);
    oustedWizards.push(targetId)
    generateNewStudentCard(sortedWizards);
  }
};

// INITIALIZE + CALL FUNCTION

const buttonEvents = () => {
  document.querySelector("#sortBtn").addEventListener("click", handleButtonClick);
  document.querySelector("#expelBtn").addEventListener("click", handleButtonClick);
  document.querySelector("#students").addEventListener("click", expelNaughtyWizard);
};

const init = () => {
   buttonEvents();
   generateNewStudentCard(sortedWizards);
};

init();
