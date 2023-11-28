const calculatePossibilities = (numberOfPeople) => {
  // Valida se o número de pessoas é um valor positivo
  if (numberOfPeople < 0) {
    console.error("Insira um valor positivo");
    return;
  }

  let possibilities = 1;

  // Calcula o fatorial do número de pessoas
  for (let i = 1; i <= numberOfPeople; i++) {
    possibilities *= i;
  }

  return possibilities;
};

calculatePossibilities(5);
