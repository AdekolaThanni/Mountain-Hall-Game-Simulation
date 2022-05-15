// "use strict";
// MOUNTAIN HALL PROBLEM SIMULATION

let count = 1,
  correctChoice = 0,
  wrongChoice = 0,
  remainingDoor,
  remainingDoors;

//   Door choices
const choices = ["goat", "car", "goat"];

// Random pick
function randomPick(max) {
  return Math.floor(Math.random() * max);
}

// Function to shuffle array
function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle
  while (currentIndex) {
    // Pick a remaining element
    randomIndex = randomPick(currentIndex);
    currentIndex--;
    // Swap with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function simulateGame(answer, repeatCount) {
  while (count <= repeatCount) {
    // Shuffle choices array
    const doors = shuffleArray(choices);
    // Pick at random
    const doorIndex = randomPick(3);
    let choice = doors[doorIndex];
    // Open the last door containing Goat
    const remainingDoors = doors.filter((_, index) => index !== doorIndex);
    if (remainingDoors.every((door) => door === "goat")) {
      remainingDoors.pop();
      remainingDoor = remainingDoors;
    } else {
      remainingDoor = remainingDoors.filter((door) => door !== "goat");
    }

    // Ask player if he would like to switch
    if (answer) {
      choice = remainingDoor[0];
      if (choice === "car") {
        correctChoice++;
      } else {
        wrongChoice++;
      }
    } else {
      if (choice === "car") {
        correctChoice++;
      } else {
        wrongChoice++;
      }
    }
    count++;
  }
  alert(
    `Player made a choice ${
      answer ? "to switch" : "not to switch"
    } and got it right ${correctChoice} times i.e ${(
      (correctChoice / repeatCount) *
      100
    ).toFixed(2)}% and got it wrong ${wrongChoice} times i.e ${(
      (wrongChoice / repeatCount) *
      100
    ).toFixed(2)}%`
  );
}

simulateGame(true, 1000000);
