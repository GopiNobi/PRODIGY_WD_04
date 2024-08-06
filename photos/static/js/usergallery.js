const viewButtons = document.querySelectorAll(".view-button");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-button");

viewButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
      modals[index].style.display = "block";
  });
});

closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
      modals[index].style.display = "none";
  });
});






