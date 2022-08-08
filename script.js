let timesZone = [
	{
		country: "Anchorage (USA)",
		timeZone: "America/Anchorage",
	},
	{
		country: "Reykjavik",
		timeZone: "Iceland",
	},
	{
		country: "Saint-Petersbourg",
		timeZone: "Europe/Moscow",
	},
];

//Initialisation
let zoneselected = 1;

//Génération du select
let selectElt = document.querySelector("#timeZone");
let i = 0;
timesZone.forEach((timeZone) => {
	let optionElt = document.createElement("option");
	optionElt.value = timeZone.timeZone;
	optionElt.innerHTML = timeZone.country;
	if (i == zoneselected) optionElt.selected = true;
	selectElt.appendChild(optionElt);
	i++;
});
selectElt.addEventListener("change", changeTimeZone);

//Fonction appelée par l'event change sur le <select>
function changeTimeZone(e) {
	zoneselected = e.target.selectedIndex;
	updateUI();
}

//Met à jour le DOM
let hours = document.querySelector(".hours__localeDate__hours");
let date = document.querySelector(".hours__localeDate__date");
function updateUI() {
	let now = new Date();
	let localTime = now.toLocaleString("fr-FR", {
		timeZone: timesZone[zoneselected].timeZone,
	});

	console.log(localTime);
}

setInterval(updateUI, 1000);
