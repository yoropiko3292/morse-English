const inputWord = document.getElementById("inputWord");
const inputMorse = document.getElementById("inputMorse");
const copyMorse = document.getElementById("copyMorse");
const copyWord = document.getElementById("copyWord");

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
			word = MORSE_CODE[code];
		}else if(code == "\n" || code == "\r" || code == " ") {
			word = "";
		}else{
			word = "□";
		}
		result += " " + word;
	}
	memo = result;
	result = "";
          for(i = 1;i < memo.length;i++){
		result += memo[i];
	}
	inputMorse.value = result;
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
		if(memo[i] == "\r" || memo[i] == "\n" || memo[i] == " "){
			code = " ";
		}
		while(memo[i] != " " && memo[i] != "　" && memo[i] != "\r" && memo[i] != "\n" && i < memo.length){
			word += memo[i];
			i++;
		}
		for(j = 0;j < keys.length;j++){
			if(MORSE_CODE[keys[j]] == word){
				code += keys[j];
			}
		}
		result += code;
	}
	inputWord.value = result;
}

function MorseSave() {
	inputMorse.select();
	document.execCommand("copy");
}

function WordSave() {
	inputWord.select();
	document.execCommand("copy");
}

inputWord.addEventListener("keyup",wordToMorse);
inputMorse.addEventListener("keyup",morseToWord);
inputWord.addEventListener("paste", function(){
	setTimeout(wordToMorse,10);
});
inputMorse.addEventListener("paste", function(){
	setTimeout(morseToWord,10);
});
copyMorse.addEventListener("click",MorseSave);
copyWord.addEventListener("click",WordSave);
