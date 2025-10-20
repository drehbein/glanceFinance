document.addEventListener('DOMContentLoaded', () => {

  // Populates date field based on current time
  let date = new Date();
  let month = date.toLocaleDateString('en-US', {month: 'long'});
  let year = date.getFullYear();
  document.getElementById('date').textContent = month + " " + year;

  // Interrupts default form behavior
  let form = document.getElementById('form');
  form.addEventListener('submit', handleSubmit);
});

function showElements (elements) {
  elements.forEach(elementID => {
    let element = document.getElementById(elementID);
    element.classList.remove('isHidden');
  });
}

function hideElements (elements) {
  elements.forEach(elementID => {
    let element = document.getElementById(elementID);
    element.classList.add('isHidden');
  });
}

function handleSubmit (event) {
  event.preventDefault();

  let tableData = JSON.parse(localStorage.getItem('tableData')) || [];

  let name = document.getElementById('name').value.trim();
  let frequency = document.getElementById('frequency').value.trim();
  let units = document.getElementById('units').value.trim();
  let amount = document.getElementById('amount').value.trim();
  let newRow = [name, frequency, units, amount];

  tableData.push(newRow);

  localStorage.setItem('tableData', JSON.stringify(tableData));
}