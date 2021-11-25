// Default variables
const startButton = document.getElementById("startButton");
const headerOne = document.getElementById("headerNames");
const tbody = document.getElementById("tbody");

// Add list of names
var namesList = [];
var resultList = [];

var iCount = 1;

var u;

document.getElementById("stringArray").addEventListener("change", function () {
  var nameList = $("#stringArray").val();

  $.each(nameList.split(/\n/), function (i, name) {
    if (name != "") {
      namesList.push({ id: i + 1, name: name });
      console.log(nameList);
    }
    document.getElementById("namelist").innerHTML = nameList 
	;
  });
});

document.getElementById("sujetField").style.display = "none";

startButton.addEventListener("click", function () {
  if (namesList.length == 1) {
    this.style.display = "none";
    document.getElementById("sujetField").style.display = "none";
  }

  document.getElementById("sujetField").style.display = "block";
 u = rand();
  headerOne.textContent = namesList[u].name;
});

document.getElementById("addSujet").addEventListener("click", function () {
  var dateI = document.getElementById("date").value;

  var sujet = document.getElementById("sujet");
//   console.log(namesList);
  let obj = {
    id: namesList[u].id,
    name: namesList[u].name,
    sujet: sujet.value,
    date: date(dateI, iCount++),
  };

  resultList.push(obj);
  namesList.splice(u, 1);
  // console.table(namesList);
  // console.table(resultList);

  sujet.value = "";

  tbody.innerHTML = "";
  resultList.forEach((element) => {
    tbody.innerHTML += `
					<tr>
						<td class="align-middle text-center">
							<h6 class="mb-0 text-xs">${element.id}</h6>
						</td>
			
						<td class="align-middle text-center text-sm">
							<p class="text-xs text-secondary mb-0">${element.name}</p>
						</td>
			
						<td class="align-middle text-center">
							<p class="text-xs text-secondary mb-0">${element.sujet}</p>
						</td>
			
						<td class="align-middle text-center">
							<p class="text-xs text-secondary mb-0">${element.date}</p>
						</td>
			
					</tr>
				`;
  });
});

function rand() {
  return Math.floor(Math.random() * namesList.length);
}

const date = (date, days) => {
  var d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
  var remaining = days % 5;
  while (remaining) {
    d.add(1, "d");
    if (d.day() !== 0 && d.day() !== 6) remaining--;
  }
  return d.format('YYYY-MM-DD');
};
