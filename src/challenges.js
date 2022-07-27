// Desafio 1
function compareTrue(a, b) {
  if(a == true && b==true){
	return true;
  }else{
	return false;
  }
}

const girafa = true;
const elefante = true;
const macaco = false;

//console.log(compareTrue(macaco, macaco));


// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return ((base * altura) / 2);
}

//console.log(calcArea(51,1));

// Desafio 3
function splitSentence(frase) {

let posicionador;
let flag=0;
let array=[];
let string;
let array2 = [];
let cont = 0;
let cont2 = 0;

let posicionador2 = 0;
let maisEspaco = 0;
let allEspacos = [];
let contEspacos = 0;
let espaco=0;
let impedeExcesso=0;

	for(let index=0; index<frase.length; index+=1){
		if(frase[index] == ' '){
			
			//if(allEspacos[contEspacos]!=index-1){
				allEspacos[contEspacos] = index;
				contEspacos+=1;
			//}
			//console.log(allEspacos[0]+"="+index);
			//else if(allEspacos[contEspacos]==index-1){
			// 	impedeExcesso=1;
			// }else{
			// 	impedeExcesso=0;
			// }
		}	
	}

	// for(x=0;x<allEspacos.length;x+=1){

	// }
	// console.log("espacos "+allEspacos);

	for(let index=0; index<frase.length; index+=1){
		//console.log("teste for inicial");
		if(frase[index] == ' ' || index==frase.length-1){
			//console.log("fora do if "+index);
			if(frase[index] == ' '){
				//caso index chegue ao final do vetor, esse if impede de pegar apenas a ultima letra da palavra final.
				// if(maisEspaco=0){
				// 	maisEspaco=1;
				console.log("fora do if posiciona "+index);
				if(flag!=0 && espaco!=allEspacos.length-1){
					console.log("dentro if posiciona "+index);
					posicionador = allEspacos[espaco]+1;//posicao seguite ao espaco existente
					espaco+=1; 
					posicionador2 = allEspacos[espaco];//nao precisa do +1 pois no for tem menor, e nao menor igual
				}else{
					console.log("dentro do else posiciona "+index);
					posicionador=index;
				}
				
				// }else{
				// 	maisEspaco=0;
				// 	posicionador2=

				// }

				console.log(index);
			}else if(contEspacos==0){
				for(let y=0; y<frase.length; y+=1){
					
					array[cont]=frase[y];
					//console.log("index2 "+frase[i]);
					cont+=1;
				}
				string = array.join('');
				array2[cont2]=string;
				return array2; // para frases com uma unica palavra
			}else if(index==frase.length-1){
				console.log("dentro do else if posiciona "+index);
				posicionador = allEspacos[espaco]+1;//ultimo espaco existente
				posicionador2=index+1;
			}
			//console.log("teste if inicial ");
			if(flag == 0){
				flag=1;
				
				for(let index2=0; index2<posicionador; index2+=1){
					array[cont]=frase[index2];
					console.log("index2 "+frase[index2]);
					cont+=1;
				}
				string = array.join('');
				array2[cont2]=string;

				console.log("If Flag 0 " +array2);
				cont2+=1;
				array = [];//zera para evitar o lixo de outras palavras
				cont = 0;
				
			}else{
				
				
				for(let index3=posicionador; index3<posicionador2; index3+=1){
					if(frase[index] != ''){
					array[cont]=frase[index3];
					console.log("index3 aqui "+index3+frase[index3]);
					cont+=1;
					}
				}
				string = array.join('');
				array2[cont2]=string;
				console.log("If Flag 1 " +array2);
				cont2+=1;
				array = [];//zera para evitar o lixo de outras palavras
				cont = 0;

			}

		}else{

		}
		

	}

	return array2;
}

	//console.log(splitSentence("ramiro de castro cavalcanti"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let aux;
  let aux2;
  let string;
  for(let index=0;index<array.length;index+=1){
		if (index==0){
			aux=array[0];
		}else if(index==array.length-1){
			aux2=array[index];	
		}
  }
  	string=aux2+", "+aux;

	return string;
}

//console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return wins*3+ties*1;
}
//console.log(footballPoints(5,8));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior=0;
  let contMaior=0;
	for(let x = 0; x < array.length; x+=1){
		
		for(let y = 0; y < array.length; y+=1){
				
			if(array[x]>array[y] && array[x]>maior){
				
					maior=array[x];
				
			}
			//console.log(array[x]+"="+array[y]);
			//console.log(maior);
			
		}
	
	}
	for(let x = 0; x < array.length; x+=1){
		if(maior==array[x]){
			//console.log("if maior "+array[x]+"="+maior);
			contMaior+=1;	
			//console.log(contMaior);	
		}
	}
return contMaior;	

	return maior;
}
//console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
