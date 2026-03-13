'use strict';

const populationElement = document.querySelectorAll('.population');

const populations = Array.from(populationElement).map((element) => {
  const text = element.textContent.replace(/,/g, '').trim();

  return Number(text);
});

const totalPopulation = populations.reduce((sum, value) => sum + value, 0);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString();

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();
