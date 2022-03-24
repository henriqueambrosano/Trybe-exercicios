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
    for (sexta of sextas) {
      if (sexta.innerText.length > 2) {
        let ulDays = document.getElementById("days");
        ulDays.innerHTML = "";
        createDays();
        break;
      } else {
        sexta.innerText = `Sextoou`;
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
      e.target.style.zoom = "200%";
    });
    day.addEventListener("mouseout", (e) => {
      e.target.style.zoom = "100%";
    });
  }
}
zoomDays();

// exercicio 7
function createTask(string) {
  let task = document.createElement("p");
  task.textContent = string + " ";
  document.getElementsByClassName("my-tasks")[0].appendChild(task);
}
createTask("Cozinhar");

//exercicio 8
function createSubtitle(cor) {
  let subtitle = document.createElement("div");
  subtitle.classList = "task";
  subtitle.style.backgroundColor = cor;
  document.getElementsByClassName("my-tasks")[0].appendChild(subtitle);
}
createSubtitle("red");

//exercicio 9
function checkTask() {
  let tasks = document.getElementsByClassName("task");
  for (task of tasks) {
    task.addEventListener("click", (e) => {
      e.target.classList.toggle("selected");
    });
  }
}
checkTask();

//exercicio 10
function paintDay() {
  let days = document.getElementsByClassName("day");
  for (day of days) {
    day.addEventListener("click", (e) => {
      if (e.target.style.backgroundColor === "") {
        let bgColor =
          document.getElementsByClassName("selected")[0].style.backgroundColor;
        e.target.style.backgroundColor = bgColor;
      } else {
        e.target.style.backgroundColor = "";
      }
    });
  }
}

paintDay();

//exercicio bonus
function addAppointment() {
  let btnAdd = document.getElementById("btn-add");
  let taskList = document.getElementsByClassName("task-list")[0];
  let inputField = document.getElementById("task-input");
  inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      btnAdd.click();
    }
  });

  btnAdd.addEventListener("click", (e) => {
    let inputValue = inputField.value;
    if (inputValue === "") {
      alert("Não é possivel adicionar um compromisso vazio");
    }
    let appointment = document.createElement("li");
    appointment.textContent = inputValue;
    taskList.appendChild(appointment);
    inputField.value = "";
  });
}

addAppointment();
