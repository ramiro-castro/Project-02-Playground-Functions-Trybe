// Desafio 11
function generatePhoneNumber(contato) {
  // seu código aqui


}

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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
