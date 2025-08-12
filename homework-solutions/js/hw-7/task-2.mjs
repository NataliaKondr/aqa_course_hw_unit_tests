/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') 
  return false;
 const lowerWord = word.toLowerCase().replace(/[^a-zа-яё]/g, '');
 const reversedWord = lowerWord.split('').reverse().join('');
 return lowerWord === reversedWord;
}
console.log(isPalindrom('казак'));
console.log(isPalindrom('машина'));
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

// task-2.mjs

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') 
  return [];
  const words = sentence.trim().split(/\s+/);
  if (words.length === 0 || words[0] === '') 
  return [];
  const maxLength = Math.max(...words.map(word => word.length));
  return words.filter(word => word.length === maxLength);
}
console.log(findLongestWords('JavaScript это эльфийский язык'));


export { isPalindrom, findLongestWords };
