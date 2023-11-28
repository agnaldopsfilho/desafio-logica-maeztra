function findMostWorkedYears(workedYears) {
  const peopleWorkedPerYear = {};

  // Percorre cada período de trabalho na matriz e desestrutura o ano de início e final
  for (const [startYear, endYear] of workedYears) {
    // Percorre todos os anos entre o ano inicial e final
    for (let year = startYear; year <= endYear; year++) {
      // Adiciona os anos no objeto para realizar a contagem de cada ano trabalhado
      peopleWorkedPerYear[year] = (peopleWorkedPerYear[year] ?? 0) + 1;
    }
  }

  // Percorre as chaves do objeto "peopleWorkedPerYear" e filtra os anos mais trabalhados
  const maxPeopleWorkedPerYear = Object.keys(peopleWorkedPerYear).filter(
    (year) => {
      // Retorna true se o valor da propriedade atual é igual ao maior número entre os valores do objeto "peopleWorkedPerYear"
      return (
        peopleWorkedPerYear[year] ===
        Math.max(...Object.values(peopleWorkedPerYear))
      );
    }
  );

  return maxPeopleWorkedPerYear;
}

const workedYears = [
  [2000, 2010],
  [2005, 2015],
  [2010, 2020],
  [2015, 2025],
];

console.log(
  "Houve mais pessoas trabalhando no(s) ano(s): ",
  findMostWorkedYears(workedYears)
);
