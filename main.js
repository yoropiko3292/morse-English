const inputWord = document.getElementById("inputWord");
const ouputMorse = document.getElementById("ouputMorse");
const inputMorse = document.getElementById("inputMorse");
const ouputWord = document.getElementById("ouputWord");
const intoMorse = document.getElementById("intoMorse");
const intoWord = document.getElementById("intoWord");

const MORSE_CODE = {
A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",
K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",
T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",
0:"-----",1:".----",2:"..---",3:"...--",4:"....-",
5:".....",6:"-....",7:"--...",8:"---..",9:"----.",
".":".-.-.-",",":"--..--",":":"---...","\?":"..--..","'":".----.","\!":"-.-.--","/":"-..-."
}

function wordToMorse() {
	let memo = inputWord.value.toUpperCase();
	let word;
          let result = "";
	let code;
          for(i = 0;i < memo.length;i++){
		code = memo[i];
		word = "";
		if(code in MORSE_CODE){
			word = " " + MORSE_CODE[code];
		}else if(code == "\n" || code == "\r" || code == " ") {
			word = "/";
		}else{
			word = "□";
		}
		result += word;
	}
	outputMorse.textContent = "結果:" + result;
}

function morseToWord() {
	let memo = inputMorse.value.toUpperCase();
          let keys = Object.keys(MORSE_CODE);
	let word;
          let result = "";
	let code;
          for(i = 0;i < memo.length;i++){
		word = "";
		code = "";
		while(memo[i] != " " && memo[i] != "　" && memo[i] != "\r" && memo[i] != "\n" && i < memo.length){
			word += memo[i];
                              i++;
		}
		for(j = 0;j < keys.length;j++){
			if(MORSE_CODE[keys[j]] == word){
				code = keys[j];
			}
		}
		if(memo[i] == "\r" && memo[i] == "\n"){
			code += " ";
		}
		result += code;
	}
	outputWord.textContent = "結果:" + result;
}

intoMorse.addEventListener("click",wordToMorse);
intoWord.addEventListener("click",morseToWord);