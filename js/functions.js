const isLengthCorrect = (strToCheck, maxLength) => strToCheck.length <= maxLength;

function isPalindrome(strToCheck) {
  const currStr = strToCheck.replaceAll(' ', '').toLowerCase();
  return currStr === currStr.split('').reverse().join('');
}

function extractNumbers(str) {
  const result = str.toString()
    .split('')
    .map((chr) => isNaN(Number(chr)) ? '' : chr)
    .join('')
    .replaceAll(' ', '');
  return result === '' ? NaN : Number(result);
}

export { isLengthCorrect, isPalindrome, extractNumbers };
