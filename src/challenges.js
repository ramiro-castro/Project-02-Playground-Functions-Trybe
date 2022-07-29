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
  let maior=-1;
  let contMaior=0;
	
	
		for(let x = 0; x < array.length; x+=1){
			
			for(let y = 0; y < array.length; y+=1){
					
				if(array[x]>=array[y] && array[x]>=maior){
					
						maior=array[x];
					
				}
				
				// console.log(array[x]+"="+array[y]);
				// console.log(maior);
				
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
console.log(highestCount([-2, -2, -1]));

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
	//console.log("d m e c1 "+distancia(mouse,cat1));
	//console.log("d m e c2 "+distancia(mouse,cat2));

	if(distancia(mouse,cat1)>distancia(mouse,cat2)){
		
		return 'cat2';

	}else if(distancia(mouse,cat1)<distancia(mouse,cat2)){
		
		return 'cat1';

	}else{
		return 'os gatos trombam e o rato foge';
	}


}

//console.log(catAndMouse(1, 0, 2));

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
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
		//console.log(index + ' e ' + encode[index]);
	}
	frase = encode.join('');
	return frase;

}

//console.log(encode("How are you today?"));
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
		//console.log(index + ' e ' + decode[index]);
	}
	frase = decode.join('');
	return frase;
}

//console.log(decode("h3 th2r2!"));

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
//console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas'));

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
