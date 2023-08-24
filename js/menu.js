let menuIsOpen = false;
const openMenu = () => {
  let hamburgerNavContainer = document.getElementById(
    "dropdown-hide");
  if (!menuIsOpen) {
    hamburgerNavContainer.style.display = "block";
    menuIsOpen = true;
  } else {
    hamburgerNavContainer.style.display = "none";
    menuIsOpen = false;
  }
};