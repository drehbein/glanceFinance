document.addEventListener('DOMContentLoaded', function () {

  //populates date field based on current time
  let date = new Date();
  let month = date.toLocaleDateString('en-US', {month: 'long'});
  let year = date.getFullYear();
  document.getElementById('date').textContent = month + " " + year;
});

// On navigation, switches between pages

function display (contentId, buttonID) {
  let graph = document.getElementById("graph");
  let breakdown = document.getElementById("breakdown");
  let options = document.getElementById("options");
  let graphButton = document.getElementById("graphButton");
  let breakdownButton = document.getElementById("breakdownButton");
  let optionsButton = document.getElementById("optionsButton");

  graph.style.display = "none";
  breakdown.style.display = "none";
  options.style.display = "none";
  graphButton.style.backgroundColor = "#702632"
  breakdownButton.style.backgroundColor = "#702632"
  optionsButton.style.backgroundColor = "#702632"

  let content = document.getElementById(contentId);
  let button = document.getElementById(buttonID);

  content.style.display = "block";
  button.style.backgroundColor = "#912F40";
}