function isSequentialDigits(number) {
  const digits = String(number);

  let isSequential = true;

  // percorre cada dígito do número
  for (let index = 0; index < digits.length - 1; index++) {
    // verifica se a diferença absoluta de dois números consecutivos é maior que 1
    if (Math.abs(Number(digits[index + 1]) - Number(digits[index])) > 1) {
      isSequential = false;
      break;
    }
  }

  if (isSequential) {
    console.log("Está ordenado");
    return true;
  }
  console.log("Não está ordenado");
  return false;
}

console.log(isSequentialDigits(12345678), isSequentialDigits(152456457));
