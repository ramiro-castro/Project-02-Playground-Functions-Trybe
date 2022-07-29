// Desafio 1
 function compareTrue(a, b) {
 if (a === true && b === true) {
 return true;
 }
 return false;
 }


// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return ((base * altura) / 2);
}
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
		
				allEspacos[contEspacos] = index;
				contEspacos+=1;

		}	
	}

	for(let index=0; index<frase.length; index+=1){
		if(frase[index] == ' ' || index==frase.length-1){
			if(frase[index] == ' '){
			
				if(flag!=0 && espaco!=allEspacos.length-1){
					
					posicionador = allEspacos[espaco]+1;//posicao seguite ao espaco existente
					espaco+=1; 
					posicionador2 = allEspacos[espaco];//nao precisa do +1 pois no for tem menor, e nao menor igual
				}else{
					console.log("dentro do else posiciona "+index);
					posicionador=index;
				}
				
			}else if(contEspacos==0){
				for(let y=0; y<frase.length; y+=1){
					
					array[cont]=frase[y];
					cont+=1;
				}
				string = array.join('');
				array2[cont2]=string;
				return array2; // para frases com uma unica palavra
		
			}else if(index==frase.length-1){
				posicionador = allEspacos[espaco]+1;//ultimo espaco existente
				posicionador2=index+1;
			}
			
			if(flag == 0){
				flag=1;
				
				for(let index2=0; index2<posicionador; index2+=1){
					array[cont]=frase[index2];
					cont+=1;
				}
				string = array.join('');
				array2[cont2]=string;

				cont2+=1;
				array = [];//zera para evitar o lixo de outras palavras
				cont = 0;
				
			}else{
				
				
				for(let index3=posicionador; index3<posicionador2; index3+=1){
					if(frase[index] != ''){
					array[cont]=frase[index3];
					
					cont+=1;
					}
				}
				string = array.join('');
				array2[cont2]=string;
				cont2+=1;
				array = [];//zera para evitar o lixo de outras palavras
				cont = 0;

			}

		}
	}
	return array2;
}
/*
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
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return wins*3+ties*1;
}
// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior=-1;
  let contMaior=0;
	
		for(let x = 0; x < array.length; x+=1){
			
			for(let y = 0; y < array.length; y+=1){
					
				if(array[x]>=array[y] && array[x]>=maior){
					
						maior=array[x];
					
				}
			}
		
		}
	for(let x = 0; x < array.length; x+=1){
		if(maior==array[x]){
			contMaior+=1;	
		}
	}
return contMaior;	

	return maior;
}
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui

	function distancia (x,y){
		let d;
		d = x-y;

		if(d<0){
			d=-1*d;
		}

		return d;
	}
	if(distancia(mouse,cat1)>distancia(mouse,cat2)){
		return 'cat2';
	}else if(distancia(mouse,cat1)<distancia(mouse,cat2)){
		return 'cat1';
	}else{
		return 'os gatos trombam e o rato foge';
	}
}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui

	for(let index=0;index<array.length;index+=1){
		if (array[index]%3 == 0 && array[index]%5 != 0){

			array[index]='fizz';

		}else if(array[index]%5 == 0 && array[index]%3 != 0){

			array[index]='buzz';

		}else if(array[index]%5 == 0 && array[index]%3 == 0){
			array[index]='fizzBuzz';
		}else{
			array[index]='bug!';
		}
	}

	return array;

}
// Desafio 9
function encode(frase) {
  // seu código aqui
  let encode = [];
  	for(let index=0;index<frase.length;index+=1){
		encode[index]=frase[index];

	}

	for(let index=0;index<encode.length;index+=1){
		
		if(encode[index]=='a'){
			encode[index]='1';
		}else if(encode[index]=='e'){
			encode[index]='2';
		}else if(encode[index]=='i'){
			encode[index]='3';
		}else if(encode[index]=='o'){
			encode[index]='4';
		}else if(encode[index]=='u'){
			encode[index]='5';
		}
	}
	frase = encode.join('');
	return frase;

}
function decode(frase) {
	// seu código aqui
	let decode = [];
	for(let index=0;index<frase.length;index+=1){
		decode[index]=frase[index];

	}

	for(let index=0;index<decode.length;index+=1){
		
		if(decode[index]=='1'){
			decode[index]='a';
		}else if(decode[index]=='2'){
			decode[index]='e';
		}else if(decode[index]=='3'){
			decode[index]='i';
		}else if(decode[index]=='4'){
			decode[index]='o';
		}else if(decode[index]=='5'){
			decode[index]='u';
		}
	}
	frase = decode.join('');
	return frase;
}
// Desafio 10
function techList(array, pessoa) {
  // seu código aqui
  if(array.length==0){
	return "Vazio!"
  }
  let vetor = [];
	function createObj(x, y){
		return{
			tech: x,
			name: y
		}

	}
	array.sort();
	for(let index = 0; index<array.length; index+=1){

		vetor.push(createObj(array[index], pessoa));
	
	}

	return vetor;

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
*/