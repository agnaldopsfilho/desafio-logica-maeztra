function findDuplicateNumbers(arr) {
  // percorre cada número do array e verifica se o número está presente em algum outro index
  const duplicates = arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
  });

  return duplicates;
}

const duplicates = findDuplicateNumbers([4, 5, 44, 98, 4, 5, 6, 7]);

console.log(duplicates);
