document.addEventListener('DOMContentLoaded', () => {

  // Populates date field based on current time
  let date = new Date();
  let month = date.toLocaleDateString('en-US', {month: 'long'});
  let year = date.getFullYear();
  document.getElementById('date').textContent = month + " " + year;

  renderTable();

  renderGraph();
});

function renderTable () {
  let tableData = JSON.parse(localStorage.getItem('tableData')) || [];
  let tableBody = document.getElementById('breakdownBody');

  tableBody.innerHTML = '';

  tableData.forEach(function(tableRow, index) {
    let tr = document.createElement('tr');
    let unitsArray = ['Days', 'Weeks', 'Months', 'Years'];
    tr.innerHTML += '<td>' + tableRow[0] + '</td>';
    tr.innerHTML += '<td>' + tableRow[1] + '</td>';
    tr.innerHTML += '<td>Every ' + tableRow[2] + ' ' + unitsArray[tableRow[3]] + '</td>';
    tr.innerHTML += '<td><img src="images/closeIcon.svg" onclick="removeItem(' + index + ')"' + '></td>';
    tableBody.appendChild(tr);
  });
}

function renderGraph () {
  // Declare the chart dimensions and margins.
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc()
      .domain([new Date("2023-01-01"), new Date("2024-01-01")])
      .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - marginBottom, marginTop]);

  // Create the SVG container.
  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height);

  // Add the x-axis.
  svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x));

  // Add the y-axis.
  svg.append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y));

  // Append the SVG element.
  let container = document.getElementById('graph');
  container.innerHTML = '';
  container.append(svg.node());
}

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

function addItem () {
  let tableData = JSON.parse(localStorage.getItem('tableData')) || [];

  let name = document.getElementById('name').value.trim();
  let amount = document.getElementById('amount').value.trim();
  let frequency = document.getElementById('frequency').value.trim();
  let units = document.getElementById('units').value.trim();
  let newRow = [name, amount, frequency, units];

  tableData.push(newRow);

  localStorage.setItem('tableData', JSON.stringify(tableData));

  renderTable();
}

function removeItem (index) {
  let tableData = JSON.parse(localStorage.getItem('tableData')) || [];

  tableData.splice(index, 1);

  localStorage.setItem('tableData', JSON.stringify(tableData));

  renderTable();
}

function deleteBreakdownData () {
  localStorage.removeItem('tableData');
  renderTable();
}