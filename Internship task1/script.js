const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

let sidebarOpen = false;

toggleBtn.addEventListener("click", () => {
  if (sidebarOpen) {
    sidebar.style.width = "0";
    sidebarOpen = false;
  } else {
    sidebar.style.width = "250px";
    sidebarOpen = true;
  }
});
