let birthDayDate = new Date("1985-11-03");
let now = new Date().getTime();

let diff = now - birthDayDate.getTime();
console.log(diff / 1000 / 60 / 60 / 24);

console.log(howManyTimePassed(birthDayDate));

function howManyTimePassed(date) {
	let timeStamp = new Date("1970-01-01").getTime();
	return date.getTime() - timeStamp;
}
