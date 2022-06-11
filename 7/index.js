// if age in a row is < 10 then row background color must be yellow.
// if if age in a row is 10 <= age < 40 then row background color must be green.
// if if age in a row is 40 <= age < 80 then row background color must be red.
// if if age in a row is >= 80 then row background color must be blue.

function generateTable() {
  var div = document.createElement("div");
  div.setAttribute("id", "table");
  document.body.appendChild(div);
  document.getElementById("table").innerHTML = `<table id='tbl' border='1'>
       <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
       </tr>
      <tr>
      <td>James</td>
      <td> 9</td>
      <td>UK</td>
      </tr>
      <tr>
      <td>Rony</td>
      <td>31 </td>
      <td>USA</td>
      </tr>
      <tr>
      <td>Peter</td>
      <td>58 </td>
      <td> Canada</td>
      </tr>
      <tr>
      <td>Marks</td>
      <td>20 </td>
      <td>Spain</td>
      </tr>
      </table>`;
}
generateTable();


  let row = document.getElementsByTagName("tr");
 

for (let i = 1; i < row.length; i++) {
  let tbt = row[i].cells[1];

  let age = tbt.textContent;
  console.log(age);
  if (age < 10) {
    row[i].style.backgroundColor = "yellow";
  }
  if (age >= 10 && age < 40) {
    row[i].style.backgroundColor = "green";
  }
  if (age >= 40 && age < 80) {
    row[i].style.backgroundColor = "red";
  }
  if (age >= 80) {
    row[i].style.backgroundColor = "blue";
  }
}

myFunc();
