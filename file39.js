//39=== print number of vowels words charater frequency in string

function words(str){
	let wcount = 0,vcount = 0,ucount =0,i = 0
	while(i < str.length){
		let ch = str[i]

		if (ch == " " || ch == ".")
			wcount += 1

		if(ch == "a" || ch == "e" ||
		ch == "i" || ch == 'o' || ch == "u")
			vcount += 1

		if (ch == "A" || ch == "E" ||
			ch == "I" || ch == 'O' || ch == "U")
			vcount += 1

		if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90){
			ucount += 1
		}
		i += 1
	}

	console.log("number of words = ", wcount,"</br>");

	console.log("number of vowels = ", vcount,"</br>");

	console.log("number of upper case characters = ",
										ucount,"</br>");

}

function frequency(str){

	let i = 1

	while(i < 127){
		let ch1 = String.fromCharCode(i);
		let c = 0
		let j = 0
		while(j < str.length){
			let ch2 = str[j]
			if(ch1 == ch2)
				c += 1
			j += 1
		}

		if(c > 0)
			console.log("Character:", ch1 + " Frequency:", c,"</br>");

		i += 1
	}
}

let s = "to kaise hai app log"

words(s)
frequency(s)