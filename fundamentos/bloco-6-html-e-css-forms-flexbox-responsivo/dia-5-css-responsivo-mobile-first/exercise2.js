const chapters = document.querySelectorAll(".chapter")[0];
const info = document.querySelectorAll(".chapter")[1];

info.onclick = () => {
  console.log(info);
  info.nextElementSibling.classList.toggle("d-none");
};

chapters.onclick = () => {
  chapters.nextElementSibling.classList.toggle("d-none");
};
