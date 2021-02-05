//FORMATTED BY PRETTIER EXTENSION

//Set constants for future use.

const sortingHouses = ["Hufflepuff", "Ravenclaw", "Gryffindor", "Slytherin"];
const students = [];
const darkArmy = [];

//Print to the Dom

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

//Making the 'appear' & 'expel' buttons function.

const buttonEvents = () => {
  document.querySelector("#appearButton").addEventListener("click", showForm);
  document
    .querySelector("#sortedWizards")
    .addEventListener("click", expelNaughtyWizard);
};

//Putting the form ON THE DOM. This had me messed up for several days - I kept trying to make it work as an HTML element.

const showForm = () => {
  let form = `<form class="form">
        <div>
          <input type="text" class="form-control text-center my-1" id="wizardName" placeholder="I REQUIRE A NAME" required>
        </div>
          <button type="submit" class="btn btn-secondary btn-lg my-4" id="sortButton">TO YOUR HOUSE!</button>
        </form>`;
  printToDom("#sortForm", form);
  document.querySelector("#sortButton").addEventListener("click", getFormInfo);
};

//I originally had a much bigger block of code for this alert function - found that it works better and is cleaner this way.

const iNeedAName = () => {
  let alert = `<h6 class="text-secondary mb-4">GIRL, I NEED YOUR NAME FIRST!</h6>`;
  printToDom("#alert", alert);
};

//Building student card; printing to its corresponding container in index

const generateNewStudentCard = (arr) => {
  let domString = "";
  for (let [i, element] of arr.entries()) {
    //I chose for/of to iterate over the array and to return the key value pairs that I defined in as a card.
    domString += `<div class="card ${element.house}" style="width: 18rem; id=${i}">
      <img src="${element.crest}" class="card-img-top cardImg" alt="${element.house}">
        <div class="card-body">
          <h5 class="card-title" id="student">${element.name}</h5>
          <p class="card-text" id="house">${element.house}</p>
        <a href="#" type="button" class="btn btn-secondary" id="${element.id}">EXPEL</a>
      </div>
    </div>`;
  }
  printToDom("#sortedWizards", domString);
};

//Referred to both the pie site & the pet adoption site.

const getFormInfo = (e) => {
  e.preventDefault(); //Prevents auto-refresh

  const name = document.querySelector("#wizardName").value;
  const house = sortingHouses[Math.floor(Math.random() * sortingHouses.length)];
  const crest = "";

  const studentIds = students
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  const obj = {
    name: name,
    house: house,
    id: id,
    crest: crest,
  };

  //I tried to put this block of code up in the crest const. Powerful lesson in order of operations.

  if (house === "Hufflepuff") {
    obj.crest =
      "https://user-images.githubusercontent.com/67122062/106535473-e9da6c80-64bb-11eb-80f4-c73dfdf8af9c.png";
  } else if (house === "Ravenclaw") {
    obj.crest =
      "https://user-images.githubusercontent.com/67122062/106535483-ef37b700-64bb-11eb-82ee-08823f3db550.jpg";
  } else if (house === "Gryffindor") {
    obj.crest =
      "https://user-images.githubusercontent.com/67122062/106535478-ec3cc680-64bb-11eb-95c3-72476a86e647.png";
  } else if (house === "Slytherin") {
    obj.crest =
      "https://user-images.githubusercontent.com/67122062/106535527-0676a480-64bc-11eb-9bc4-0c55da1bc506.jpg";
  }

  //Moved this down here - it did not work when I had it as a standalone.

  if (name.length === 0) {
    //If the name field is empty, call the alert
    iNeedAName();
  } else {
    students.push(obj); //If not, push object to array

    generateNewStudentCard(students);
    document.querySelector("form").reset(); //reset form after submitting
  }
};

//Delete functionality + moving to different array.

const expelNaughtyWizard = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button") {
    const studentIndex = students.findIndex(
      (student) => student.id === targetId
    );
    let ousted = students.splice(studentIndex, 1); //removes selected student (found by index)
    darkArmy.push(...ousted); //pushes that student to dark army array
  }
  generateNewStudentCard(students);
  badBin(darkArmy);
};

//Generate new student card, with new text + crest

const badBin = (arr) => {
  let domString = "";

  for (let [i, element] of arr.entries()) {
    domString += `<div class="card ousted" style="width: 18rem; id=${element.id}">
      <img src="https://user-images.githubusercontent.com/67122062/106537356-c87b7f80-64bf-11eb-9e93-acf2e22e4ef2.jpg" class="card-img-top cardImg" alt="dark mark image that everyone has a tattoo of">
      <div class="card-body">
        <h5 class="card-title" id="student">${element.name} HAS DEFECTED TO THE DARK ARMY</h5>
      </div>
      </div>`;

    printToDom("#darkArmy", domString);
  }
};

//Initialize + call button events.

const init = () => {
  buttonEvents();
};

init();
