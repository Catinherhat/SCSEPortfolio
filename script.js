const tabButtons = document.querySelectorAll(".tab-button");
const projectPages = document.querySelectorAll(".project-page");
const year = document.querySelector("#year");

function showProject(tab) {
  const targetId = tab.getAttribute("aria-controls");

  tabButtons.forEach((button) => {
    const isActive = button === tab;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  projectPages.forEach((page) => {
    const isActive = page.id === targetId;
    page.classList.toggle("active", isActive);
    page.hidden = !isActive;
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => showProject(button));
});

if (year) {
  year.textContent = new Date().getFullYear();
}
