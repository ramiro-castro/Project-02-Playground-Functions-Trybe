// Desafio 11
function generatePhoneNumber(contato) {
  // seu código aqui
  let aparece =0;
  let obsIndex=0;
  let formata = [];
  if(contato.length!=11){
	return 'Array com tamanho incorreto.'
  }


  for(let index=0; index<contato.length;index+=1){
	if(contato[index]<0){
		return 'não é possível gerar um número de telefone com esses valores';
	}else if(contato[index]>9){
		return 'não é possível gerar um número de telefone com esses valores';
	}
  }

  for(let index=0; index<contato.length;index+=1){
	//console.log("aqui index");
	for(let index2 = 0; index2 < contato.length; index2+=1){
		//console.log("aqui y");
		if(contato[index]==contato[index2]){
			
			aparece+=1;
			
			//console.log(contato[index] + " aparece " + aparece +" vez(es).");
			if (aparece>=3){
				return 'não é possível gerar um número de telefone com esses valores';
			}
		}
		
	}
	aparece = 0;

  }
  formata=['(',contato[0],contato[1],') ',contato[2],contato[3],contato[4],contato[5],contato[6],'-',contato[7],contato[8],contato[9],contato[10]];
  return formata.join('')

}

//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  let if1;
  let if2;
  if (lineA+lineB>lineC && lineB+lineC>lineA && lineC+lineA>lineB){
    if1 = 1;
  }
  if (Math.abs(lineA-lineB)<lineC && Math.abs(lineB-lineC)<lineA && Math.abs(lineC-lineA)<lineB){
	if2 = 1;
  }

  if(if1 == 1 && if2 == 1){
		return true;

  }
  return false;
}
// Desafio 13
function hydrate(string) {
  // seu código aqui
  let copos = 0;

  for(let index = 0; index<string.length; index+=1){

	if(string[index]==1){
		copos+=1;
	}else if(string[index]==2){
		copos+=2;
	}else if(string[index]==3){
		copos+=3;
	}else if(string[index]==4){
		copos+=4;
	}else if(string[index]==5){
		copos+=5;
	}else if(string[index]==6){
		copos+=6;
	}else if(string[index]==7){
		copos+=7;
	}else if(string[index]==8){
		copos+=8;
	}else if(string[index]==9){
		copos+=9;
	}
  }
  if(copos == 1){
  	return copos + " copo de água";
  }else if(copos > 1){
	return copos + " copos de água";
  }
}

//console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
