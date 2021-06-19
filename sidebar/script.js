const buttons = document.getElementsByClassName("button");
const menu = document.getElementById("sliding__menu");

function onMenuButtonClick(event) {
  event.preventDefault();
  menu.className =
    menu.className === "sidebar__visible"
      ? "sidebar__hidden"
      : "sidebar__visible";
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", onMenuButtonClick, false);
}
