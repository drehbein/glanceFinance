document.addEventListener('DOMContentLoaded', function () {

  //populates date field based on current time
  let date = new Date();
  let month = date.toLocaleDateString('en-US', {month: 'long'});
  let year = date.getFullYear();
  document.getElementById('date').textContent = month + " " + year;
});

function displayOptions () {
  let options = document.getElementById('optionsWrapper');
  options.classList.remove('isHidden');
}

function hideOptions () {
  let options = document.getElementById('optionsWrapper');
  options.classList.add('isHidden');
}