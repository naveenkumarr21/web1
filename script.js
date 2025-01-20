const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const submenuItems = document.querySelectorAll(".submenu_item");

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const sidebarOpen = document.getElementById("sidebarOpen");

  // Ensure the sidebar starts in the closed state
  sidebar.classList.add("close");

  // Toggle open/close on hover
  sidebar.addEventListener("mouseenter", () => {
    sidebar.classList.remove("close");
  });

  sidebar.addEventListener("mouseleave", () => {
    sidebar.classList.add("close");

    // Close all submenus when the mouse leaves the sidebar
    submenuItems.forEach((item) => {
      const submenu = item.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        submenu.classList.remove("open");
        item.querySelector(".arrow-left").classList.remove("open");
      }
    });
  });

  // Toggle open/close on menu icon click
  sidebarOpen.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
});

// Dark/Light mode toggle
darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event bubbling
    const submenu = item.nextElementSibling;

    // Toggle the submenu visibility
    if (submenu && submenu.classList.contains("submenu")) {
      submenu.classList.toggle("open");
      item.querySelector(".arrow-left").classList.toggle("open");
    }
  });
});

// Automatically close sidebar on small screens
if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}
