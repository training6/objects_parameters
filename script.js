function pageLoad() {

	let myObject = {
		key1: "This is a text",
		key2: 2,
		key3: false,
		key4: ["alma", "cseresznye", "citrom"],
		key5: function () {
			return "This is a function"; //Return: "kiküld", akkor szabadul ki a függvényből
		},
		key6: {
			key6obj1: "This is another text",
			key6obj2: 3
		},
		key7: function () {
			//return 7;
			console.log(7);
		},
		key8: function (param1, param2) {

			console.log(param1);

			for (let index = 0; index < param2.length; index++) {
				console.log(param2[index]);
			}
		},
		key9: function (name) {
			return `
			<h1>Greetings my beloved ${name}!</h1>
			`
		} //paraméter létrehozásakor változóként jön létre TILOS "LET NAME" - felülírnám paramétert. 
			//Azaz Paraméter nevét NEM SZABAD vátozó névként használni a függvényen belül!!! függvény scope, itt is lehetne "param1"

	};
	console.log(myObject.key5());
	myObject.key7();
	myObject.key8("Show this text.", [1, 5, 7, 10]); //itt küldök információt BE a függvényembe!!!, több paraméter is lehet, és többféle paraméter is
	document.getElementById("root").insertAdjacentHTML("beforeend", myObject.key9("Balázs"));









}

window.addEventListener('load', pageLoad);