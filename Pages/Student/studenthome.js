const profile = document.getElementById("profile");
const dropdown = document.getElementById("dropdown");
const dropdownUl = dropdown.querySelector("ul");

profile.addEventListener("click", function() {
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
        dropdownUl.style.display = "none";
    } else {
        dropdown.style.display = "flex";
        dropdown.style.flexDirection = "column";
        dropdownUl.style.display = "flex";
        dropdownUl.style.flexDirection = "column";
    }
});



function navigateToPage(pageURL) {
  window.location.href = pageURL;
}

var Insightsbtn = document.getElementById('Insightsbtn');
var reportButton = document.getElementById('reportButton');
var intrastructurebtn = document.getElementById('intrastructurebtn');
var administratorbtn = document.getElementById('administratorbtn');

if (Insightsbtn) {
  Insightsbtn.addEventListener('click', function() {
    navigateToPage('/Pages/Student/studentprofile.html');
  });
}

if (reportButton) {
  reportButton.addEventListener('click', function() {
    navigateToPage('/Pages/Student/academicreport.html');
  });
}

if (intrastructurebtn) {
  intrastructurebtn.addEventListener('click', function() {
    navigateToPage('/Pages/Student/infrastructurereport.html');
  });
}

if (administratorbtn) {
  administratorbtn.addEventListener('click', function() {
    navigateToPage('/Pages/Student/administratorreport.html');
  });
}

const stars = document.querySelectorAll(".stars i");
// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});








