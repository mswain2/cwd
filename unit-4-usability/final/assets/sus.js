let form = document.querySelector("#SUSform");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let q1 = Number(this.q1.value);
	//This was a test to make sure the value was coming through.
	//console.log(q1);
	let q2 = Number(this.q2.value);
	let q3 = Number(this.q3.value);
	let q4 = Number(this.q4.value);
	let q5 = Number(this.q5.value);
	let q6 = Number(this.q6.value);
	let q7 = Number(this.q7.value);
	let q8 = Number(this.q8.value);
	let q9 = Number(this.q9.value);
	let q10 = Number(this.q10.value);

	//Subtract one from all of the odd questions
	q1 = q1 - 1;
	q3 = q3 - 1;
	q5 = q5 - 1;
	q7 = q7 - 1;
	q9 = q9 - 1;

	//Subtract each even question from 5
	q2 = 5 - q2;
	q4 = 5 - q4;
	q6 = 5 - q6;
	q8 = 5 - q8;
	q10 = 5 - q10;

	//Add all of the questions together.
	let total = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10;

	//Multiply total by 2.5 to get final score
	total = total * 2.5;

	//Set the final_score in the html to be the score just calculated
	this.final_score.innerText = total;

});