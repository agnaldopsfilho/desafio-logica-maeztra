function isValidString(string) {
  // Será um array somente com os caracteres de abertura
  const openingChars = [];

  // Mapeamento dos caracteres de abertura e fechamento
  const charsMap = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  // percorre cada caractere da string
  for (char of string) {
    // O "char in charsMap" é usado para verificar se o caractere é uma chave do objeto charsMap. Se for então ele é um caractere de abertura.
    if (char in charsMap) {
      openingChars.push(char);
    } else {
      // Caso não seja um caractere de abertura será removido o último elemento do openingChars e armazenado na variável
      const lastChar = openingChars.pop();

      // Verifica se o caractere é diferente da chave de fechamento válida para o "lastChar" e encerra a função
      if (!lastChar || char !== charsMap[lastChar]) {
        return;
      }
    }
  }
  return openingChars.length === 0;
}

const str1 = "{[()(){}[]]{}}";
const str2 = "{[(()]}";

console.log(
  isValidString(str1) ? "É uma string válida" : "Não é uma string válida"
);
console.log(
  isValidString(str2) ? "É uma string válida" : "Não é uma string válida"
);
