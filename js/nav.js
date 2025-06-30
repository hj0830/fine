document.addEventListener("DOMContentLoaded", function () {
  fetch("includes/navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      const toggle = document.querySelector(".menu-toggle");
      const navMenu = document.querySelector(".navbar");
      if (toggle && navMenu) {
        toggle.addEventListener("click", () => {
          navMenu.classList.toggle("active");
        });
      }
    });

  fetch("includes/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
