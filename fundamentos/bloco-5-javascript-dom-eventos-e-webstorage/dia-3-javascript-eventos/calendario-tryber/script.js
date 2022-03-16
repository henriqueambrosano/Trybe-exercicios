function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// exercicio 1:
function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let ulDays = document.getElementById("days");
  for (num of dezDaysList) {
    let li = document.createElement("li");
    li.classList = "day";
    if (num === 24 || num === 25 || num === 31) {
      li.classList.add("holiday");
    }
    if (num === 4 || num === 11 || num === 18 || num === 25) {
      li.classList.add("friday");
    }
    li.textContent = num;
    ulDays.appendChild(li);
  }
}
createDays();
//exercicio 2
function createBtnHoliday(string) {
  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-holiday");
  btn.innerText = string;
  document.getElementsByClassName("buttons-container")[0].appendChild(btn);
}
createBtnHoliday("Feriados");

//exercicio 3
function changeHolidaysBackground() {
  let btn = document.getElementById("btn-holiday");
  btn.addEventListener("click", () => {
    let feriados = document.getElementsByClassName("holiday");
    for (each of feriados) {
      if (each.style.backgroundColor == "") {
        each.style.backgroundColor = "red";
      } else {
        each.style.backgroundColor = "";
      }
    }
  });
}
changeHolidaysBackground();

// exercicio 4
function createBtnFriday(string) {
  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-friday");
  btn.innerText = string;
  document.getElementsByClassName("buttons-container")[0].appendChild(btn);
}
createBtnFriday("Sexta-feira");

// exercicio 5
function changeFridaysText() {
  let btn = document.getElementById("btn-friday");
  btn.addEventListener("click", () => {
    let sextas = document.getElementsByClassName("friday");
    for (each of sextas) {
      if (each.innerText.length > 2) {
        each.innerText = each.innerText.slice(9);
      } else {
        each.innerText = `Sextoou -${each.innerText}`;
      }
    }
  });
}
changeFridaysText();

// exercicio 6:
function zoomDays() {
  let days = document.getElementsByClassName("day");
  for (day of days) {
    day.addEventListener("mouseover", (e) => {
      e.target.style.fontSize = "40px";
    });
    day.addEventListener("mouseout", (e) => {
      e.target.style.fontSize = "20px";
    });
  }
}
zoomDays();

// exercicio 7
function createTask(string) {
  let task = document.createElement("span");
  task.textContent = string + " ";
  document.getElementsByClassName("my-tasks")[0].appendChild(task);
}
createTask("Cozinhar");
