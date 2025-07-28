const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
});
function closeSidebar() {
  sidebar.style.width = "0";
}
