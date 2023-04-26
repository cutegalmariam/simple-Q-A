let counter = 0;

function changeCards() {
  document.getElementById("cont1").classList.add("notShow");
  document.getElementById("cont2").classList.add("mustShow");
  if (document.getElementById("js").checked) {
    counter = counter + 1;
    console.log(counter);
  }
}

function changeCards1() {
  document.getElementById("cont2").classList.remove("mustShow");
  document.getElementById("cont3").classList.add("mustShow");
  if (document.getElementById("joe").checked) {
    counter = counter + 1;
    console.log(counter);
  }
}

function changeCards2() {
  document.getElementById("cont3").classList.remove("mustShow");
  document.getElementById("cont4").classList.add("mustShow");
  if (document.getElementById("ans1").checked) {
    counter = counter + 1;
    console.log(counter);
  }
}

function changeCards3() {
  document.getElementById("cont4").classList.remove("mustShow");
  let scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.classList.add("mustShow");

  if (document.getElementById("ans95").checked) {
    counter = counter + 1;
    console.log(counter);
  }

  let finishText = document.createElement("h2");
  let refreshButton = document.createElement("button");

  finishText = "You answered correctly at questions " + counter + "/4";

  refreshButton.classList.add("refresh");
  refreshButton.addEventListener("click", (e) => {
    window.location.reload();
  });
  refreshButton.innerText = "Reload";

  scoreDisplay.append(finishText);
  scoreDisplay.append(refreshButton);
}
function displayScore() {
  document.getElementById("scoreDisplay").append(counter + "/4");
}
