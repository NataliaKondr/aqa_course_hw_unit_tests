/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return [...wordsArr].sort((a,b) => {
    const countA = a.toLowerCase().split('').filter(char => vowels.includes(char)).length;

    const countB = b.toLowerCase().split('').filter(char => vowels.includes(char)).length;

    return countA - countB;
  });
}

export { sortedByVowels };
